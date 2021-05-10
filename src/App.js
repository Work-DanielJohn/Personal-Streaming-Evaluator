/* eslint-disable no-unused-vars */
import { useEffect , useState, useCallback } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

const App = () => {
  const [totalTime, setTotalTime] = useState(10)
  const [timer, setTimer] = useState(totalTime)
  const [start, setStart] = useState(false)
  const [taps, setTaps] = useState(0)

  // Timer countdown
  useEffect(() => {
    timer > 0 && start === true && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer, start])
  
  // Add tap
  const addTap = useCallback(
    (event) => {
      const { key, keyCode } = event;
      
      // z || x
      if (key === 'z' || key === 'x') {
        if (start === false) {
          setStart(true)
          setTimer(timer - 1)
        }
        timer > 0 && setTaps(taps + 1)
      }
    }, [taps, timer, start])

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
