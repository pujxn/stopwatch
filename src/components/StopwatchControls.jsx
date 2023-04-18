const StopwatchControls = ({ handleLaps, playState, handlePauseToggle, handleReset }) => {
    return (
        <>
            <button onClick={handlePauseToggle}>{playState ? "Pause" : "Play"}</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLaps}>Lap</button>
        </>

    )
}

export default StopwatchControls;