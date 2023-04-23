import { useSelector, useDispatch } from "react-redux";
import { addLap } from "@/reduxState/lapsSlice";
import { setPrevLapTime } from "@/reduxState/prevLapTimeSlice";
import { setPlayState } from "@/reduxState/playStateSlice";

const StopwatchControls = ({ timer }) => {

    const playState = useSelector(state => state.playState.value);
    const prevLapTime = useSelector(state => state.prevLapTime.value);
    const dispatch = useDispatch();

    const handleLaps = () => {
        dispatch(addLap({ prevLapTime: prevLapTime, currentTime: timer.getTimeValues().toString() }))
        dispatch(setPrevLapTime(timer.getTimeValues().toString()));
    }

    const handleReset = () => {
        dispatch(setPlayState(false));
        timer.reset();
        timer.stop();
    }

    const handlePauseToggle = () => {
        dispatch(setPlayState(!playState));
        playState ? timer.pause() : timer.start();
    }

    return (
        <>
            <button onClick={handlePauseToggle}>{playState ? "Pause" : "Play"}</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleLaps}>Lap</button>
        </>

    )
}

export default StopwatchControls;