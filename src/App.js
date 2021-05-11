/* eslint-disable no-unused-vars */
import { useEffect , useState, useCallback } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

// Default settings
const defaultValues = {
  testTime: 10,
  leftKey: 'z',
  rightKey: 'x',
  streamFreq: 4, // 1 beat for every 1 semi-quaver. If 1, then it's per quaver
}

const App = () => {
  const settingValues = Object.create(defaultValues)

  const [totalTime, setTotalTime] = useState(settingValues.testTime)
  const [timer, setTimer] = useState(totalTime)
  const [start, setStart] = useState(false)
  const [taps, setTaps] = useState(0)

  // Timer countdown
  useEffect(() => {
    (timer > 0) &&                                // When timer hasn't run out
    (start === true) &&                           // When test has started
    setTimeout(() => setTimer(timer - 1), 1000)   // Function to count down
  }, [timer, start])
  
  // Add tap
  const addTap = useCallback(
    (event) => {
      const { key } = event;
      
      if (key === settingValues.leftKey || key === settingValues.rightKey) {
        if (start === false) {
          setStart(true)
        }
        timer > 0 && setTaps(taps + 1)
      }
    }, [settingValues, taps, timer, start])

  useEffect(() => {
    window.addEventListener("keyup", addTap)
    return () => {
      window.removeEventListener("keyup", addTap)
    }
  }, [addTap])

  return (
    <div className="container">
      <Header title={"Streaming Performance Calculator"} />
      <Content time={timer} totalTime={totalTime} taps={taps} />
      Taps: {taps}
    </div>
  );
}

export default App;

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
