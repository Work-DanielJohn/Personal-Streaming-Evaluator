const StatsPanel = ({ time, settings, totalTime, taps }) => {
    const timeElapsed = totalTime - time
    const averageStream = settings.timeMultiplier * taps / timeElapsed
    const songBPM = taps / (1 + (totalTime - time) / settings.timeMultiplier) * (60 / settings.streamFreq)

    return (
        <div>
            Time remaining: {time/settings.timeMultiplier} <br></br>
            Time elapsed: {(totalTime - time) / settings.timeMultiplier} <br></br>
            Avg streaming speed (taps/sec): {isNaN(averageStream) || !isFinite(averageStream) ? "0"
            : Math.round(settings.timeMultiplier * averageStream) / settings.timeMultiplier} <br></br>
            Song bpm: {Math.round(settings.timeMultiplier * songBPM) / settings.timeMultiplier} <br></br>
            Taps: {taps}
        </div>
    )
}

// Average streaming speed: {taps / ((totalTime - time) === 0 ? 1 : (totalTime - time))}

export default StatsPanel
