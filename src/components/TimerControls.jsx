// import { handleToggle } from "@/routes/StopwatchLogic";

const TimerControls = ({ handleReset, playState, handlePauseToggle, timerEditMode, handleTimerStart }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("e.target", e.target);
        // console.log("document.eleId", document.getElementById("timerEditForm"));
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
        // playState ? <button onClick={handlePauseToggle}>{Start}</button> :

        //     (<button form="timerEditForm" type="submit" onClick={handleSubmit}>Start</button>)

    )
}

export default TimerControls;