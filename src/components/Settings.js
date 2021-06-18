const Settings = ({ useState, open, settings, defaultSettings, changeSettings }) => {
    const [newTime, setNewTime] = useState(settings.testTime)
    const [newFreq, setNewFreq] = useState(settings.streamFreq)

    const replaceKey = (keyType) => {
        alert(keyType)
        // show replace key window
        // keyboard handle for input
        // allow cancel with button
        // return new key or None if cancel
        // maybe add 10s timer with cancel if no input??
        // new input will change settings.leftKey for example
    }

    const save = () => {
        changeSettings({
            time: newTime,
            freq: newFreq
        })
    }

    return (
        // make settings component position relative? with y value
        <div className={open ? "settings-box open" : "settings-box"}>
            <div className="settings-inner">
                <h2>Settings</h2>
                <h3>General</h3>

                <table className="settingsTable">
                    <tbody>
                        <tr>
                            <td>Left tap: <i>{settings.leftKey}</i></td>
                            <td><button onClick={() => replaceKey("left")}><i className="fas fa-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Right tap: <i>{settings.rightKey}</i></td>  
                            <td><button onClick={() => replaceKey("right")}><i className="fas fa-edit"></i></button></td>
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
                                <button onClick={() => setNewTime(newTime + 1)} disabled={newTime >= 60 ? true : false}><i className="far fa-plus-square"></i></button>
                                {newTime} seconds
                                <button onClick={() => setNewTime(newTime - 1)} disabled={newTime <= 5 ? true : false}><i className="far fa-minus-square"></i></button>
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

// Changing keys and checkbox settings do not work

// • Make it easier to change duration as going from 5 to 60 is 55 clicks!!

// • Fix Help description to be dynamic --> 'stats will be shown "before and after" the test' should depend on settings

// • have a <span {conditional color for whether setting is changed} ></span>
// this will change color to blue for changed settings, then change back to white when saved



// IDEAS:

// • maybe have a massive invisible box under the settings menu,
// so if a user clicks on it, then the settings menu closes(?)

// • add high scores and leaderboard
