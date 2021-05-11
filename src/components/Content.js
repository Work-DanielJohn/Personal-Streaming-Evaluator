import StatsPanel from "./StatsPanel"

const Content = ({ time, settings, totalTime, taps }) => {
    return (
        <div>
            <StatsPanel time={time} settings={settings} totalTime={totalTime} taps={taps} />
        </div>
    )
}

export default Content
