const StatsPanel = ({ time, totalTime, taps }) => {
    const averageStream = (taps / ((time === totalTime) ? 1 : (totalTime - time)))

    return (
        <div>
            Time remaining: {time} <br></br>
            Avg streaming speed (bps): {averageStream}
        </div>
    )
}

// Average streaming speed: {taps / ((totalTime - time) === 0 ? 1 : (totalTime - time))}

export default StatsPanel
