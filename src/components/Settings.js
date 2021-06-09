const Settings = ({ open, settings, defaultSettings }) => {

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
                            <td>Left tap</td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td>Right tap</td>  
                            <td><input></input></td>
                        </tr>
                        <tr> 
                            <td>Streaming frequency</td>
                            <td><input></input></td>
                        </tr> 
                        <h3>Burst Mode Settings</h3>
                        <tr>
                            <td>Total Time</td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td>Show non-timer stats during test</td>
                            <td><input type="checkbox" defaultChecked="true"></input></td>
                        </tr>
                        
                        <tr>
                            <td><button>Save</button></td>
                            <td><button>Reset</button></td>
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