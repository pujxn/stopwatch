const StopwatchControls = ({ playState, toggle, stop, reset }) => {
    return (
        <>
            <button onClick={toggle}>{playState ? "Pause" : "Play"}</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>

    )
}

export default StopwatchControls;