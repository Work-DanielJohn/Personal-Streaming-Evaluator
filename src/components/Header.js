const Header = ({ toggle, settingOpen}) => {
    return (
        <header>
            <button title="Streaming Modes"><i className="fas fa-2x fa-gamepad"></i></button>
            <h1 title="Tap those Beats!">PERS<span>O</span>NAL <span>S</span>TREAMING EVAL<span>U</span>ATOR<span>!</span></h1>
            <button title="Settings" className={settingOpen && "buttonOn"} onClick={toggle}><i className="fas fa-2x fa-cog"></i></button>
        </header>
    )
}

export default Header
