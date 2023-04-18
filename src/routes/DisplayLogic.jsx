import { useEffect, useState } from "react";
import useTimer from "easytimer-react-hook";
import StopwatchControls from "@/components/StopwatchControls";
import StopwatchDisplay from "@/components/StopwatchDisplay";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";
import StopwatchLaps from "@/components/StopwatchLaps";

const DisplayLogic = () => {


    const [mode, setMode] = useState("");

    const [timerEditMode, setTimerEditMode] = useState(true);

    const [playState, setPlayState] = useState(false);

    const [laps, setLaps] = useState([]);

    const [prevLapTime, setPrevLapTime] = useState("00:00:00");

    const [prevTimerValue, setPrevTimerValue] = useState({
        "hours": 0,
        "minutes": 0,
        "seconds": 0,
    });

    const [timer] = useTimer();


    const handlePauseToggle = () => {
        setPlayState((prevState) => !prevState);
        playState ? timer.pause() : timer.start();
    }

    const handleReset = () => {
        setPlayState(false);
        if (mode == "timer") {
            setTimerEditMode(true);
        }
        timer.reset();
        timer.stop();
    }

    const handleModeSwitch = (newMode) => {
        setMode(newMode);
        setPlayState(false);
        timer.reset();
        timer.stop();
        if (newMode == "timer") {
            setTimerEditMode(true);
        }
    }

    const handleTimerStart = (timeObj) => {
        setTimerEditMode(false);
        setPrevTimerValue(timeObj);
        setTimerEditMode(false);
        timer.start({ countdown: true, startValues: timeObj })
    }

    const handleTimerCompleted = () => {
        alert("Time is up!");
        setTimerEditMode(true);
    }

    const calcTimeStrDiff = (oldHms, newHms) => {
        const diff = new Date("1970-01-01T" + newHms).getTime() - new Date("1970-01-01T" + oldHms).getTime();
        const diffSeconds = (Math.floor(diff / 1000));
        const diffSecondsLeft = (diffSeconds % 60 < 10 ? "0" : "") + diffSeconds % 60;
        const diffMinutes = (Math.floor(diffSeconds / 60));
        const diffMinutesLeft = (diffMinutes % 60 < 10 ? "0" : "") + diffMinutes % 60;
        const diffHours = (Math.floor(diffMinutes / 60));
        const diffHoursLeft = (diffHours < 10 ? "0" : "") + diffHours;
        return `${diffHoursLeft}:${diffMinutesLeft}:${diffSecondsLeft}`
    }

    const handleLaps = () => {
        setLaps((prevState) => [...prevState, calcTimeStrDiff(prevLapTime, timer.getTimeValues().toString())]);
        setPrevLapTime(timer.getTimeValues().toString());
    }

    useEffect(() => {
        timer.addEventListener("targetAchieved", handleTimerCompleted)
    }, [])


    return (
        <>
            <button onClick={() => handleModeSwitch("stopwatch")}>Stopwatch</button>
            <button onClick={() => handleModeSwitch("timer")}>Timer</button>

            {mode == "stopwatch" ? (
                <>
                    <StopwatchDisplay time={timer.getTimeValues().toString()} />
                    <StopwatchControls handleLaps={handleLaps} playState={playState} handlePauseToggle={handlePauseToggle} handleReset={handleReset} />
                    <StopwatchLaps laps={laps} />
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