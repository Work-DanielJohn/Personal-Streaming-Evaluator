import { useEffect , useState, useCallback } from "react"
import Header from "./components/Header"
import Burst from "./components/Burst"

// Default settings
const defaultSettings = {
  testTime: 15,         // 15 seconds
  timeMultiplier: 1,   // 1dp accuracy (multiplier / 10 = dp)     !!! - This is inaccurate, fix later 
  leftKey: 'z',
  rightKey: 'x',
  streamFreq: 4,        // Frequency of 4: 1 tap per semi-quaver. Freq of 1: 1 tap per quaver.
}

const mode = "Burst mode"

const App = () => {
  const settings = Object.create(defaultSettings)

  // settings.leftKey = "c" <-- Changes settings, not defaultSettings (defaults can be reused)

  const totalTime = settings.testTime
  const [timer, setTimer] = useState(totalTime)
  const [start, setStart] = useState(false)
  const [taps, setTaps] = useState(-1)            // Costs one tap to start ;)

  // Timer countdown
  useEffect(() => {
    (timer > 0) &&                                // When timer hasn't run out
    (start === true) &&                           // When test has started
    setTimeout(() => setTimer(timer - 1), (1000)) // Function to count down
  }, [settings, timer, start])
  
  // Add tap
  const addTap = useCallback(
    (event) => {
      const { key } = event;
      
      if (key === settings.leftKey || key === settings.rightKey) {
        if (start === false) {
          setStart(true)
        }
        timer > 0 && setTaps(taps + 1)
      }
    }, [settings, taps, timer, start]
  )
  
  // Keyboard event manager
  useEffect(() => {
    window.addEventListener("keyup", addTap)
    return () => {
      window.removeEventListener("keyup", addTap)
    }
  }, [addTap])

  // Reset
  const reset = () => {
    setTimer(totalTime)
    setStart(false)
    setTaps(0)
  }

  return (
    <div className="container">
      <Header />
      <Burst title={mode} time={timer} settings={settings} totalTime={totalTime} taps={taps} />
      <button onClick={reset} disabled={timer!==0}>Reset</button>
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
• Deathstream       - Build your endurance by tapping as many times as you can within a time limit!
              or    - Build your endurance by maintaining a tapping rhythm for as long as you can! 
• Burst mode        - Test your speed by tapping a number of times as fast as possible!
• Tracking mode     - Track and stream as the circle moves across the map before you run out of life!
• Freestyle         - Tap to the rhythm of any song you like with customisable hit sounds!
*/