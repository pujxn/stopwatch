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

    const handlePauseToggle = (timeObj) => {
        // console.log("timeObj", timeObj);
        // console.log(playState)
        setPlayState((prevState) => !prevState);
        playState && (
            timer.pause()
        );
        !playState && (
            mode == "stopwatch" ? timer.start() : timer.start({ countdown: true, startValues: timeObj }),
            timerEditMode && setTimerEditMode(false)
        );
    }

    const handleReset = () => {
        setPlayState(false);
        timer.reset();
        timer.stop();
        if (mode == "timer") {
            setTimerEditMode(true);
        }
    }


    return (
        <>
            <button onClick={() => setMode("stopwatch")}>Stopwatch</button>
            <button onClick={() => setMode("timer")}>Timer</button>

            {mode == "stopwatch" ? (
                <>
                    <StopwatchDisplay time={timer.getTimeValues().toString()} />
                    <StopwatchControls playState={playState} handlePauseToggle={handlePauseToggle} handleReset={handleReset} />
                </>) :
                mode == "timer" && (
                    <>
                        <TimerDisplay time={timer.getTimeValues().toString()} timerEditMode={timerEditMode} />
                        <TimerControls handleReset={handleReset} handlePauseToggle={handlePauseToggle} timerEditMode={timerEditMode} playState={playState} />

                    </>)
            }
        </>
    )
}

export default DisplayLogic;