import { useEffect, useState } from "react";
import useTimer from "easytimer-react-hook";
import StopwatchControls from "@/components/StopwatchControls";
import StopwatchDisplay from "@/components/StopwatchDisplay";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import StopwatchLaps from "@/components/StopwatchLaps";
import { useSelector, useDispatch } from "react-redux";
import { handleModeSwitch } from "@/components/modeSlice";
import { setTimerEditMode } from "@/components/timerEditModeSlice";
import { setPlayState } from "@/components/playStateSlice";
import { addLap } from "@/components/lapsSlice";
import { setPrevLapTime } from "@/components/prevLapTimeSlice";
import { setPrevTimerValue } from "@/components/prevTimerValueSlice";

const DisplayLogic = () => {

    const dispatch = useDispatch();

    const mode = useSelector(state => state.mode.value);

    const timerEditMode = useSelector(state => state.timerEditMode.value);

    const playState = useSelector(state => state.playState.value);

    const laps = useSelector(state => state.laps.value);

    const prevLapTime = useSelector(state => state.prevLapTime.value);

    const prevTimerValue = useSelector(state => state.prevTimerValue.value);

    // const [prevTimerValue, setPrevTimerValue] = useState({
    //     "hours": 0,
    //     "minutes": 0,
    //     "seconds": 0,
    // });

    const [timer] = useTimer();


    const handlePauseToggle = () => {
        dispatch(setPlayState(!playState));
        playState ? timer.pause() : timer.start();
    }

    const handleReset = () => {
        dispatch(setPlayState(false));
        if (mode == "timer") {
            dispatch(setTimerEditMode(true));
        }
        timer.reset();
        timer.stop();
    }

    const modeToggle = (newMode) => {
        dispatch(handleModeSwitch(newMode));
        dispatch(setPlayState(false));
        timer.reset();
        timer.stop();
        if (newMode == "timer") {
            dispatch(setTimerEditMode(true));
        }
    }

    const handleTimerStart = (timeObj) => {
        dispatch(setTimerEditMode(false));
        dispatch(setPrevTimerValue(timeObj));
        dispatch(setPlayState(true));
        timer.start({ countdown: true, startValues: timeObj })
    }

    const handleTimerCompleted = () => {
        alert("Time is up!");
        dispatch(setTimerEditMode(true));
    }


    const calcMsFromStr = (hms) => {
        return new Date("1970-01-01T" + hms).getTime();
    }

    const handleLaps = () => {
        dispatch(addLap({ prevLapTime: prevLapTime, currentTime: timer.getTimeValues().toString() }))
        dispatch(setPrevLapTime(timer.getTimeValues().toString()));
    }

    useEffect(() => {
        timer.addEventListener("targetAchieved", handleTimerCompleted)
    }, [])


    return (
        <>
            <button onClick={() => modeToggle("stopwatch")}>Stopwatch</button>
            <button onClick={() => modeToggle("timer")}>Timer</button>

            {mode == "stopwatch" ? (
                <>
                    <StopwatchDisplay time={timer.getTimeValues().toString()} />
                    <StopwatchControls handleLaps={handleLaps} playState={playState} handlePauseToggle={handlePauseToggle} handleReset={handleReset} />
                    {laps.length != 0 && <StopwatchLaps laps={laps} calcMsFromStr={calcMsFromStr} />}
                </>) :
                mode == "timer" && (
                    <>
                        <TimerDisplay prevTimerValue={prevTimerValue} time={timer.getTimeValues().toString()} timerEditMode={timerEditMode} />
                        <TimerControls handleTimerStart={handleTimerStart} handleReset={handleReset} handlePauseToggle={handlePauseToggle} timerEditMode={timerEditMode} playState={playState} />
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
