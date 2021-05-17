const StatsPanel = ({ time, settings, totalTime, taps }) => {
    const timeElapsed = totalTime - time
    const averageStream = taps / timeElapsed
    const songBPM = taps / (totalTime - time) * (60 / settings.streamFreq)

    return (
        <div>
            Time remaining: {time} <br></br>
            Time elapsed: {timeElapsed} <br></br>
            Taps: {taps < 0 ? "0" : taps} <br></br>
            Speed: {isNaN(averageStream) || !isFinite(averageStream)
                ? "0" : averageStream.toFixed(2)} <br></br>
            Song bpm: {isNaN(songBPM) || !isFinite(songBPM)
                ? "0" : songBPM.toFixed(2)} 
        </div>
    )
}

// Average streaming speed: {taps / ((totalTime - time) === 0 ? 1 : (totalTime - time))}

export default StatsPanel
