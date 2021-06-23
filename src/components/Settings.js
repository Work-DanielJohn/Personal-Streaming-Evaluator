import { useEffect , useCallback } from "react"

const Settings = ({ useState, open, settings, defaultSettings, changeSettings }) => {
    const [newTime, setNewTime] = useState(settings.testTime)
    const [newFreq, setNewFreq] = useState(settings.streamFreq)
    const [newLeft, setNewLeft] = useState(settings.leftKey)
    const [newRight, setNewRight] = useState(settings.rightKey)
    const [replace, setReplace] = useState(0)
    // 0 = No replace | 1 = replace left key | 2 = replace right key

    const save = () => {
        changeSettings({
            time: newTime,
            freq: newFreq,
            left: newLeft,
            right: newRight
        })
    }

    const newKey = useCallback(
        (event) => {
            const { key } = event
            if (key === "Escape") { alert("ayo") }
            else if (replace === 1) setNewLeft(key)
            else if (replace === 2) setNewRight(key)
            setReplace(0)
        },
        [replace],
    )

    useEffect(() => {
        if (replace) {
            window.addEventListener("keydown", newKey)
            return () => {
                window.removeEventListener("keydown", newKey)
            }
        }
      }, [newKey, replace])

    return (
        // make settings component position relative? with y value
        <div className={open ? "settings-box open" : "settings-box"}>
            <div className="settings-inner">
                <h2>Settings</h2>
                <h3>General</h3>

                <table className="settingsTable">
                    <tbody>
                        <tr>
                            <td>Left tap: <i>{newLeft}</i></td>
                            <td>
                                <button className={replace === 1 ? "activeSettingButton" : ""}
                                    onClick={() => setReplace(replace === 0 ? 1 : 0)}><i className="fas fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Right tap: <i>{newRight}</i></td>  
                            <td><button onClick={() => setReplace(2)}><i className="fas fa-edit"></i></button></td>
                        </tr>
                        <tr> 
                            <td>Streaming<br></br>frequency<br></br><small>( Recommended: 4 )</small></td>
                            <td>
                                <button onClick={() => setNewFreq(newFreq * 2)} disabled={newFreq >= 32 ? true : false}><i className="far fa-plus-square"></i></button>
                                {newFreq} tap{newFreq >= 2 ? "s" : ""} <br></br> per quaver
                                <button onClick={() => setNewFreq(newFreq / 2)} disabled={newFreq <= 1 ? true : false}><i className="far fa-minus-square"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>Burst Mode</h3>
                <table className="settingsTable">
                    <tbody>
                        <tr>
                            <td>Test Duration</td>
                            <td>
                                <button onClick={() => setNewTime(newTime + 5)} disabled={newTime >= 60 ? true : false}><i className="far fa-plus-square"></i></button>
                                {newTime} seconds
                                <button onClick={() => setNewTime(newTime - 5)} disabled={newTime <= 5 ? true : false}><i className="far fa-minus-square"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Show non-timer stats during test</td>
                            <td><input type="checkbox" defaultChecked="true"></input></td>
                        </tr>
                        
                        <tr>
                            <td><button>Reset</button></td>
                            <td><button onClick={save}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Settings

// TO DO:

// Changing keys works but it doesn't show the user any prompts

// Checkbox settings do not work

// Changing to the same key starts the game in the background (solve by toggling ready i think)

// Make reset button red when settings arent the same as default (maybe disabled if they all are)

// • Fix Help description to be dynamic --> 'stats will be shown "before and after" the test' should depend on settings

// • have a <span {conditional color for whether setting is changed} ></span>
// this will change color to blue for changed settings, then change back to white when saved



// IDEAS:

// • maybe have a massive invisible box under the settings menu,
// so if a user clicks on it, then the settings menu closes(?)

// • add high scores and leaderboard
