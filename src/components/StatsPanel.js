const StatsPanel = ({ time, settings, totalTime, taps }) => {
    const timeElapsed = totalTime - time
    const averageStream = taps / timeElapsed
    const songBPM = taps / (timeElapsed) * (60 / settings.streamFreq)

    // Stats can be toggled to appear/hide during the test 
    return (
        <div>
            Time remaining: {time} <br></br>
            Time elapsed: {timeElapsed} <br></br>
            {(settings.showStats || time === 0 ) && <>
            Taps: {taps < 0 ? "0" : taps} <br></br>
            Speed: {isNaN(averageStream) || !isFinite(averageStream)
                ? "0" : averageStream.toFixed(2)} <br></br>
            Song bpm: {isNaN(songBPM) || !isFinite(songBPM)
                ? "0" : songBPM.toFixed(2)}
            </>}
        </div>
    )
}

export default StatsPanel
