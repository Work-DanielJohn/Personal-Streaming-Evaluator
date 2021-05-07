/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

const App = () => {
  const [totalTime, setTotalTime] = useState(10)
  const [timer, setTimer] = useState(totalTime)
  const [taps, setTaps] = useState(50)

  // Timer countdown
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
  }, [timer])

  return (
    <div className="container">
      <Header title={"Streaming Performance Calculator"} />
      <Content time={timer} totalTime={totalTime} taps={taps} />

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
