const Header = ({ title }) => {
    return (
        <header>
            <div class="innerHeader">
                <div class="title">
                    <h1>{title}</h1>
                </div>
                <ul class="menuOptions">
                    <button><li>Modes <i class="fas fa-gamepad"></i> </li></button>
                    <button><li>Settings <i class="fas fa-cog"></i> </li></button>
                </ul>
            </div>
        </header>
    )
}

export default Header
