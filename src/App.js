/* eslint-disable no-unused-vars */
import { useEffect , useState, useCallback } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

const App = () => {
  const [totalTime, setTotalTime] = useState(10)
  const [timer, setTimer] = useState(totalTime)
  const [taps, setTaps] = useState(0);

  // Timer countdown
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer])
  
  // Add tap
  const addTap = useCallback(
    (event) => {
      const { key, keyCode } = event;
      
      // z || x
      if (key === 'z' || key === 'x') {
        timer > 0 && setTaps(taps + 1)
      }
    }, [taps, timer])

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
