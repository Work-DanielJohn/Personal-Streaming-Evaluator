const Settings = ({ open, settings, defaultSettings }) => {
    const replaceKey = () => {
        alert("ayo")
        // show replace key window
        // keyboard handle for input
        // allow cancel with button
        // return new key or None if cancel
        // maybe add 10s timer with cancel if no input??
        // new input will change settings.leftKey for example
    }

    const replaceLeft = () => {
        alert("replace left key")
        replaceKey()
    }

    const replaceRight = () => {
        alert("replace right key")
        replaceKey()
    }

    return (
        // make settings component position relative? with y value
        <div className={open ? "settings-box open" : "settings-box"}>
            <div className="settings-inner">
                <h2>Settings</h2>
                <h3>General Settings</h3>
                
                <table className="settingsTable">
                    <tbody>
                        <tr>
                            <td>Left tap: <i>{settings.leftKey}</i></td>
                            <td><button onClick={replaceLeft}><i className="fas fa-edit"></i></button></td>
                        </tr>
                        <tr>
                            <td>Right tap: <i>{settings.rightKey}</i></td>  
                            <td><button onClick={replaceRight}><i className="fas fa-edit"></i></button></td>
                        </tr>
                        <tr> 
                            <td>Streaming <br></br>frequency</td>
                            <td>
                                <button><i className="far fa-plus-square"></i></button>
                                {settings.streamFreq}
                                <button><i className="far fa-minus-square"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>Burst Mode Settings</h3>
                <table className="settingsTable">
                    <tbody>
                        <tr>
                            <td>Test Duration</td>
                            <td>
                                <button><i className="far fa-plus-square"></i></button>
                                {settings.testTime}
                                <button><i className="far fa-minus-square"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>Show non-timer stats during test</td>
                            <td><input type="checkbox" defaultChecked="true"></input></td>
                        </tr>
                        
                        <tr>
                            <td><button>Reset</button></td>
                            <td><button>Save</button></td>
                        </tr>
                    </tbody>
                    
                    
                </table>
            </div>
        </div>
    )
}

export default Settings

// maybe have a massive invisible box under the settings menu,
// so if a user clicks on it, then the settings menu closes(?)