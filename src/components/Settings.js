const Settings = ({ open, settings, defaultSettings }) => {
    
    const replaceKey = () => {
        // show replace key window
        // keyboard handle for input
        // allow cancel with button
        // return new key or None if cancel
        // maybe add 10s timer with cancel if no input??
        // new input will change settings.leftKey for example
    }


    return (
        // make settings component position relative? with y value
        <div className={open ? "settings-box open" : "settings-box"}>
            <div className={"settings-inner"}>
                <div>
                    <h2>Settings</h2>
                </div>
                <table className="settingsTable">
                    <tbody>
                        <h3>General Settings</h3>
                        <tr>
                            <td>Left tap: {settings.leftKey}</td>
                            <td><button onClick={settings.leftKey = replaceKey()}>Choose new</button></td>
                        </tr>
                        <tr>
                            <td>Right tap: {settings.rightKey}</td>  
                            <td><button onClick={settings.rightKey = replaceKey()}>Choose new</button></td>
                        </tr>
                        <tr> 
                            <td>Streaming frequency</td>
                            <td><button>^</button>{settings.streamFreq}<button>v</button></td>
                        </tr> 
                        <h3>Burst Mode Settings</h3>
                        <tr>
                            <td>Test Duration</td>
                            <td><button>^</button>{settings.testTime}<button>v</button></td>
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