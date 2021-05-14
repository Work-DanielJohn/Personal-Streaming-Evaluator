import { useState } from "react"
import StatsPanel from "./StatsPanel"

const Burst = ({ title, time, settings, totalTime, taps, reset }) => {
    const [help, setHelp] = useState(false)
    
    const closeHelp = () => {
        setHelp(false)
    }

    return (
        <div>
            <h2>{title}</h2>
            { !help && <>
                <button onClick={setHelp}> Help <i class="far fa-question-circle"></i> </button>
                <StatsPanel time={time} settings={settings} totalTime={totalTime} taps={taps} /> 
                <button onClick={reset} disabled={time!==0}>Reset <i class="fas fa-undo"></i> </button> </>
            }
            { help &&
                <div>
                    <button onClick={closeHelp}>Back</button>
                    <p>
                        Press the <b>{settings.leftKey}</b> and <b>{settings.rightKey}</b> buttons as fast as you can! <br></br>
                        You have <b>{time}</b> seconds to test your streaming speed. <br></br>
                        <br></br>
                        The test <b>duration</b> and tapping <b>keys</b> can be customised in the <b>settings</b> menu. <br></br>
                        <br></br>
                        <i>Longer tests may generate more accurate results, <br></br>
                        but it can also exhause your stamina.</i> <br></br>
                        <br></br>
                        <span class="underline">Your streaming statistics will be displayed during and after the test:</span> <br></br>
                        <table class="burstTable">
                            <tr>
                                <td>Time remaining/elapsed</td>
                                <td>How many seconds remain/have passed since starting.</td>
                            </tr>
                            <tr>
                                <td>Average streaming speed</td>
                                <td>This is how many taps you make per second.</td>
                            </tr>
                            <tr>
                                <td>Song bpm</td>
                                <td>An estimated bpm you could feel comfortable streaming, <br></br>
                                where you do {settings.streamFreq} tap{settings.streamFreq > 1 && "s"} per quaver.</td>
                            </tr>
                            <tr>
                                <td>Taps</td>
                                <td>Increments by one each time you release a key.</td>
                            </tr>
                        </table>                        
                    </p>
                </div>
            }
        </div>
    )
}

export default Burst
