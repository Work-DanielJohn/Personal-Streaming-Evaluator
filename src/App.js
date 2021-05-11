import { useEffect , useState, useCallback } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

// Default settings
const defaultSettings = {
  testTime: 10,         // 10 seconds
  timeMultiplier: 10,   // 1dp accuracy (multiplier / 10 = dp)
  leftKey: 'z',
  rightKey: 'x',
  streamFreq: 4,        // Frequency of 4: 1 tap per semi-quaver. Freq of 1: 1 tap per quaver.
}

const App = () => {
  const settings = Object.create(defaultSettings)

  const totalTime = settings.testTime * settings.timeMultiplier
  const [timer, setTimer] = useState(totalTime)
  const [start, setStart] = useState(false)
  const [taps, setTaps] = useState(0)

  // Timer countdown
  useEffect(() => {
    (timer > 0) &&                                // When timer hasn't run out
    (start === true) &&                           // When test has started
    setTimeout(() => setTimer(timer - 1), (1000 / settings.timeMultiplier)) // Function to count down
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
    setTimer(100)
    setStart(false)
    setTaps(0)
  }

  return (
    <div className="container">
      <Header title={"Streaming Performance Calculator"} />
      <Content time={timer} settings={settings} totalTime={totalTime} taps={taps} />
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
  Content
    StatsPanel
    StreamRoom
      StreamButton
    SettingsPanel
  Footer
*/

// Uso! Modes:
/*
• Deathstream       - Build your endurance by tapping as many times as you can within a time limit!
• Burst mode        - Test your speed by tapping a number of times as fast as possible!
• Tracking mode     - Track and stream as the circle moves across the map before you run out of life!
• Freestyle         - Tap to the rhythm of any song you like with customisable hit sounds!
*/