import StatsPanel from "./StatsPanel"

const Content = ({ title, time, settings, totalTime, taps }) => {
    return (
        <div>
            <h2>{title}</h2>
            <button> Help </button>
            <StatsPanel time={time} settings={settings} totalTime={totalTime} taps={taps} />
        </div>
    )
}

export default Content
