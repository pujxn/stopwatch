const StopwatchControls = ({ playState, handlePauseToggle, handleReset }) => {
    return (
        <>
            <button onClick={handlePauseToggle}>{playState ? "Pause" : "Play"}</button>
            {/* <button onClick={stop}>Stop</button> */}
            <button onClick={handleReset}>Reset</button>
        </>

    )
}

export default StopwatchControls;