import { setTimerEditMode } from "@/reduxState/timerEditModeSlice";
import { setPrevTimerValue } from "@/reduxState/prevTimerValueSlice";
import { setPlayState } from "@/reduxState/playStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const TimerControls = ({ timer }) => {

    const dispatch = useDispatch();
    const playState = useSelector(state => state.playState.value);
    const timerEditMode = useSelector(state => state.timerEditMode.value);

    const handleTimerCompleted = () => {
        alert("Time is up!");
        dispatch(setTimerEditMode(true));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(document.getElementById("timerEditForm"));
        const values = Object.fromEntries(data.entries());
        dispatch(setTimerEditMode(false));
        dispatch(setPrevTimerValue(values));
        dispatch(setPlayState(true));
        timer.start({ countdown: true, startValues: values })
    }

    const handleReset = () => {
        dispatch(setPlayState(false));
        dispatch(setTimerEditMode(true));
        timer.reset();
        timer.stop();
    }

    const handlePauseToggle = () => {
        dispatch(setPlayState(!playState));
        playState ? timer.pause() : timer.start();
    }

    // const handleTimerStart = (timeObj) => {
    //     dispatch(setTimerEditMode(false));
    //     dispatch(setPrevTimerValue(timeObj));
    //     dispatch(setPlayState(true));
    //     timer.start({ countdown: true, startValues: timeObj })
    // }

    useEffect(() => {
        timer.addEventListener("targetAchieved", handleTimerCompleted)
    }, [])

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