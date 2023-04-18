import { useState } from "react";
import useTimer from "easytimer-react-hook";
import StopwatchControls from "@/components/StopwatchControls";
import StopwatchDisplay from "@/components/StopwatchDisplay";
import TimerDisplay from "@/components/TimerDisplay";
import TimerControls from "@/components/TimerControls";

const DisplayLogic = () => {

    const [mode, setMode] = useState("");

    const [timerEditMode, setTimerEditMode] = useState(true);

    const [timer] = useTimer();

    const [playState, setPlayState] = useState(false);

    const [prevTimerValue, setPrevTimerValue] = useState({
        "hours": 0,
        "minutes": 0,
        "seconds": 0,
    });

    const handlePauseToggle = () => {
        // console.log("timeObj", timeObj);
        // console.log(playState)
        setPlayState((prevState) => !prevState);
        playState && (
            timer.pause()
        );
        !playState && (
            timer.start()
            // timerEditMode && 
            // mode == "timer" && setPrevTimerValue(timeObj)
        );
    }

    const handleReset = () => {
        setPlayState(false);
        // const pt = timer.getTimeValues();
        if (mode == "timer") {
            // setPrevTimerValue({ ...timer.getTimeValues() });
            setTimerEditMode(true);
        }
        // console.log(timer.getTimeValues());
        // console.log("ptold", pt, timer.getTimeValues());

        timer.reset();
        timer.stop();
        // console.log("pt", pt, timer.getTimeValues());
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


    return (
        <>
            <button onClick={() => handleModeSwitch("stopwatch")}>Stopwatch</button>
            <button onClick={() => handleModeSwitch("timer")}>Timer</button>

            {mode == "stopwatch" ? (
                <>
                    <StopwatchDisplay time={timer.getTimeValues().toString()} />
                    <StopwatchControls playState={playState} handlePauseToggle={handlePauseToggle} handleReset={handleReset} />
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