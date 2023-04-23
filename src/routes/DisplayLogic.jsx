import useTimer from "easytimer-react-hook";
import StopwatchControls from "@/components/StopwatchControls";
import StopwatchDisplay from "@/components/StopwatchDisplay";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import StopwatchLaps from "@/components/StopwatchLaps";
import { useSelector, useDispatch } from "react-redux";
import { handleModeSwitch } from "@/reduxState/modeSlice";
import { setTimerEditMode } from "@/reduxState/timerEditModeSlice";
import { setPlayState } from "@/reduxState/playStateSlice";

const DisplayLogic = () => {

    const dispatch = useDispatch();

    const mode = useSelector(state => state.mode.value);

    const [timer] = useTimer();

    const modeToggle = (newMode) => {
        dispatch(handleModeSwitch(newMode));
        dispatch(setPlayState(false));
        timer.reset();
        timer.stop();
        if (newMode == "timer") {
            dispatch(setTimerEditMode(true));
        }
    }

    return (
        <>
            <button onClick={() => modeToggle("stopwatch")}>Stopwatch</button>
            <button onClick={() => modeToggle("timer")}>Timer</button>

            {mode == "stopwatch" ? (
                <>
                    <StopwatchDisplay timer={timer} />
                    <StopwatchControls timer={timer} />
                    <StopwatchLaps />
                </>) :
                mode == "timer" && (
                    <>
                        <TimerDisplay timer={timer} />
                        <TimerControls timer={timer} />
                    </>)
            }
        </>
    )
}

export default DisplayLogic;
export const calcTimeStrDiff = (oldHms, newHms) => {
    const diff = new Date("1970-01-01T" + newHms).getTime() - new Date("1970-01-01T" + oldHms).getTime();
    const diffSeconds = (Math.floor(diff / 1000));
    const diffSecondsLeft = (diffSeconds % 60 < 10 ? "0" : "") + diffSeconds % 60;
    const diffMinutes = (Math.floor(diffSeconds / 60));
    const diffMinutesLeft = (diffMinutes % 60 < 10 ? "0" : "") + diffMinutes % 60;
    const diffHours = (Math.floor(diffMinutes / 60));
    const diffHoursLeft = (diffHours < 10 ? "0" : "") + diffHours;
    return `${diffHoursLeft}:${diffMinutesLeft}:${diffSecondsLeft}`
}

export const calcMsFromStr = (hms) => {
    return new Date("1970-01-01T" + hms).getTime();
}
