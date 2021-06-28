import { useState, useEffect , useCallback } from "react"

const Settings = ({ open, settings, defaultSettings, changeSettings }) => {
    const [newTime, setNewTime] = useState(settings.testTime)
    const [newFreq, setNewFreq] = useState(settings.streamFreq)
    const [newLeft, setNewLeft] = useState(settings.leftKey)
    const [newRight, setNewRight] = useState(settings.rightKey)
    const [newStats, setNewStats] = useState(settings.showStats)
    const [replace, setReplace] = useState(0)
    // 0 = No replace | 1 = replace left key | 2 = replace right key

    // Pass all changes to app for editing settings
    const save = () => {
        changeSettings({
            time: newTime,
            freq: newFreq,
            left: newLeft,
            right: newRight,
            stats: newStats
        })
    }

    const setDefault = () => {
        setNewTime(defaultSettings.testTime)
        setNewFreq(defaultSettings.streamFreq)
        setNewLeft(defaultSettings.leftKey)
        setNewRight(defaultSettings.rightKey)
        setNewStats(defaultSettings.showStats)
    }

    // Change tapping key if valid
    const newKey = useCallback(
        (event) => {
            const { key } = event
            if (key === "Escape") { }
            else if (replace === 1) setNewLeft(key)
            else if (replace === 2) setNewRight(key)
            setReplace(0)
        },
        [replace],
    )

    // Handler to check for inputs when changing keys
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
                            <td>Left tap: <i>{replace === 1 ? "Type new" : newLeft}</i></td>
                            <td>
                                <button tabIndex={open ? "" : "-1"} className={replace === 1 ? "activeSettingButton" : ""}
                                    onClick={() => setReplace(replace !== 1 ? 1 : 0)}>Edit <i className="fas fa-edit"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Right tap: <i>{replace === 2 ? "Type new" : newRight}</i></td>  
                            <td>
                                <button tabIndex={open ? "" : "-1"} className={replace === 2 ? "activeSettingButton" : ""}
                                    onClick={() => setReplace(replace !== 2 ? 2 : 0)}>Edit <i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                        <tr> 
                            <td>Streaming<br></br>frequency<br></br><small>( Recommended: 4 )</small></td>
                            <td>
                                <button tabIndex={open ? "" : "-1"} onClick={() => setNewFreq(newFreq * 2)}
                                    disabled={newFreq >= 32 ? true : false}>x2
                                </button>
                                {newFreq} tap{newFreq >= 2 ? "s" : ""} <br></br> per quaver
                                <button tabIndex={open ? "" : "-1"} onClick={() => setNewFreq(newFreq / 2)}
                                    disabled={newFreq <= 1 ? true : false}>÷2
                                </button>
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
                                <button tabIndex={open ? "" : "-1"} onClick={() => setNewTime(newTime + 5)}
                                    disabled={newTime >= 60 ? true : false}>+5
                                </button>
                                {newTime} seconds
                                <button tabIndex={open ? "" : "-1"} onClick={() => setNewTime(newTime - 5)}
                                    disabled={newTime <= 5 ? true : false}>-5
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Show non-timer stats during test</td>
                            <td>
                                <button tabIndex={open ? "" : "-1"} onClick={() => setNewStats(!newStats)}>
                                {newStats ? "On" : "Off"}</button>
                            </td>
                        </tr>
                        <tr>
                            <td><button tabIndex={open ? "" : "-1"} onClick={setDefault} 
                                title="Reset settings to default">Default</button></td>
                            <td><button tabIndex={open ? "" : "-1"} onClick={save}
                                title="Save settings">Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Settings

// TO DO:

// Cancel change key input if settings is closed

// Make reset button red when settings arent the same as default (maybe disabled if they all are)

// • Fix Help description to be dynamic --> 'stats will be shown "before and after" the test' should depend on settings

// • have a <span {conditional color for whether setting is changed} ></span>
// this will change color to blue for changed settings, then change back to white when saved

// Add pb and improvement since last test in stats panel?

// IDEAS:

// • maybe have a massive invisible box under the settings menu,
// so if a user clicks on it, then the settings menu closes(?)

// • add high scores and leaderboard
