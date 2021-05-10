import StatsPanel from "./StatsPanel"

const Content = ({ time, totalTime, taps }) => {
    return (
        <div>
            <StatsPanel time={time} totalTime = {totalTime} taps={taps} />
        </div>
    )
}

export default Content
