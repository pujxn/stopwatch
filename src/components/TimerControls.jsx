import { setTimerEditMode } from "@/reduxState/timerEditModeSlice";
import { setPrevTimerValue } from "@/reduxState/prevTimerValueSlice";
import { setPlayState } from "@/reduxState/playStateSlice";
import { useDispatch, useSelector } from "react-redux";


const TimerControls = ({ timer, playState, handlePauseToggle, timerEditMode }) => {

    const dispatch = useDispatch();


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

    // const handleTimerStart = (timeObj) => {
    //     dispatch(setTimerEditMode(false));
    //     dispatch(setPrevTimerValue(timeObj));
    //     dispatch(setPlayState(true));
    //     timer.start({ countdown: true, startValues: timeObj })
    // }

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