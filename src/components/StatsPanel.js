const StatsPanel = ({ time, totalTime, taps }) => {
    return (
        <div>
            Time remaining: {time} <br></br>
            Avg streaming speed (bps): {taps / ((time === totalTime) ? 1 : (totalTime - time))}
        </div>
    )
}

// Average streaming speed: {taps / ((totalTime - time) === 0 ? 1 : (totalTime - time))}

export default StatsPanel
