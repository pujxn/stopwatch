const TimerControls = ({ handleReset, playState, handlePauseToggle, timerEditMode, handleTimerStart }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(document.getElementById("timerEditForm"));
        const values = Object.fromEntries(data.entries());
        handleTimerStart(values);
    }

    return (

        timerEditMode ? (<button form="timerEditForm" type="submit" onClick={handleSubmit}>Start</button>) : (
            <>
                <button onClick={handlePauseToggle}>{playState ? "Stop" : "Start"}</button>
                <button onClick={handleReset}>Reset</button>
            </>
        )
    )
}

export default TimerControls;