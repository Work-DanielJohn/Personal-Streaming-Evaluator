import { useEffect , useState, useCallback } from "react"
import Header from "./components/Header"
import Settings from "./components/Settings"
import Burst from "./components/Burst"

// Default settings
const defaultSettings = {
  testTime: 15,         // DEFAULT 15 - Duration of test
  timeMultiplier: 1,    // DEFAULT 1 - dp accuracy (multiplier / 10 = dp)     !!! - This is inaccurate, fix later 
  streamFreq: 4,        // DEFAULT 4 - Frequency of 4: 1 tap per semi-quaver. Freq of 1: 1 tap per quaver.
  leftKey: 'z',         // DEFAULT 'z' - Left tap key
  rightKey: 'x',        // DEFAULT 'x' - Right tap key
  showStats: true,      // DEFAULT true - Show non-timer statistics (Burst only?)
}

const settings = Object.create(defaultSettings)

const App = () => {
  const [totalTime, setTotalTime] = useState(settings.testTime)
  const [timer, setTimer] = useState(settings.testTime)
  const [start, setStart] = useState(false)       // Boolean for if game is running
  const [ready, setReady] = useState(true)        // Boolean to prevent game starting in other menus
  const [taps, setTaps] = useState(-1)            // Costs one tap to start ;)
  const [settingOpen, setOpen] = useState(false)  // Open / close the settings menu (Closed by default)

  // Toggle the settings menu (open / close)
  const toggleSettings = () => {
    setOpen(!settingOpen)
    setReady(settingOpen)
  }

  // Timer countdown
  useEffect(() => {
    if (timer > 0 &&                                                  // When timer hasn't run out
    start === true) {                                                 // When test has started
      setTimeout(() => setTimer(timer - 1), (1000))}                  // Function to count down
  }, [timer, start])
  
  // Add tap
  const addTap = useCallback(
    (event) => {
      const { key } = event
      if (ready) {
        if (key === settings.leftKey || key === settings.rightKey) {
          if (start === false) {
            setStart(true)
          }
          timer > 0 && setTaps(taps + 1)
        }
      }
    }, [taps, timer, start, ready]
  )
  
  // Keyboard event manager
  useEffect(() => {
    window.addEventListener("keyup", addTap)
    return () => {
      window.removeEventListener("keyup", addTap)
    }
  }, [addTap])

  // Prevent test starting in wrong menu
  const toggleReady = () => {
    setReady(!ready)
  }

  // Reset test to starting conditions
  const reset = () => {
    setReady(false)
    setStart(false)
    setTotalTime(settings.testTime)
    setTaps(0)

    // The test will reset in 1 second - a workaround that I may improve later
    setTimeout(() => setTimer(settings.testTime), (1000))
    if (!settingOpen) setTimeout(() => setReady(true), (1000))
  }

  const changeSettings = (newSettings) => {
    settings.testTime = newSettings.time
    settings.streamFreq = newSettings.freq
    settings.leftKey = newSettings.left
    settings.rightKey = newSettings.right
    reset()
  }

  return (
    <div className="container">
      <Header toggle={toggleSettings} settingOpen={settingOpen}/>
      <Burst time={timer} settings={settings} totalTime={totalTime}
        taps={taps} reset={reset} start={start} ready={toggleReady}/>
      <Settings open={settingOpen} settings={settings}
        defaultSettings={defaultSettings} changeSettings={changeSettings}/>
    </div>
  );
}

export default App;

// Uso! Structure:
/*
Container
  Header
    ModeButton
    ModePanel
    SettingsButton
  SettingsPanel
  Burst
    StatsPanel
  Deathstream
  Footer
*/

// Uso! Modes:
/*
• Deathstream       - Build endurance by tapping as many times as you can within a time limit!
              or    - Build endurance by maintaining a tapping rhythm for as long as you can! 
• Burst mode        - Test your speed by tapping a number of times as fast as possible!
• Tracking mode     - Track and stream as the circle moves across the map before you run out of life!
• Freestyle         - Tap to the rhythm of any song you like with customisable hit sounds!
*/