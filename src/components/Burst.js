import { useState } from "react"
import StatsPanel from "./StatsPanel"

const Burst = ({ time, settings, totalTime, taps, reset, start, ready }) => {
    const [help, setHelp] = useState(false)
    
    const toggleHelp = () => {
        setHelp(!help)
        ready()
    }

    return (
        <div>
            <h2>Burst mode</h2>
            { !help && 
                <>
                    <button onClick={toggleHelp} disabled={start && time !== 0}> Help <i className="far fa-question-circle"></i> </button>
                    <button onClick={reset} disabled={time === totalTime}>Reset <i className="fas fa-undo"></i> </button>
                    {!start && <p>Press {settings.leftKey} or {settings.rightKey} to start! </p>}
                    <br></br>
                    <StatsPanel time={time} settings={settings} totalTime={totalTime} taps={taps} />
                </>
            }
            { help &&
                <div className="burstBox">
                    <button onClick={toggleHelp}>Back</button>
                    <div>
                        <p>
                            Press the <b>{settings.leftKey}</b> and <b>{settings.rightKey}</b> buttons as fast as you can! <br></br>
                            You have <b>{totalTime}</b> seconds to test your streaming speed. <br></br>
                            <br></br>
                            The test <b>duration</b> and tapping <b>keys</b> can be customised in the <b>settings</b> menu. <br></br>
                            <br></br>
                            <i>Longer tests may generate more accurate results, <br></br>
                            but it can also exhause your stamina.</i> <br></br>
                            <br></br>
                            <span className="underline">Your streaming statistics will be displayed during and after the test:</span> <br></br>
                        </p>
                        <table className="burstTable">
                            <tbody>
                                <tr className="burstTitle">
                                    <td>Time</td>
                                    <td>Speed</td>
                                    <td>Song BPM</td>
                                    <td>Taps</td>
                                </tr>
                                <tr>
                                    <td>How many seconds remaining / elapsed since starting.</td>
                                    <td>The average frequency of taps per second.</td>
                                    <td>The recommended bpm you could comfortablably stream, where you
                                        do {settings.streamFreq} tap{settings.streamFreq > 1 && "s"} per quaver.</td>
                                        <td>Increments by one each time you release a key.</td>
                                </tr>
                            </tbody>
                        </table>                        
                    </div>
                </div>
            }
        </div>
    )
}

export default Burst
