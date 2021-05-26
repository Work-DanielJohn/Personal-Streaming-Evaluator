const Settings = ({ open }) => {

    return (
        // make settings component position relative? with y value
        <div className={open ? "settings-box open" : "settings-box"}>
            <div className={"settings-inner"}>
                <div>
                    <h2>Settings</h2>
                </div>
                <p>temp setting 1</p>
                <p>temp setting 2</p>
                <p>temp setting 3</p>
                <p>temp setting 4</p>
            </div>
        </div>
    )
}

export default Settings

// open ? "settings-box open" : "settings-box"