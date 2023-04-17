import { useState, useEffect } from "react";
import useTimer from "easytimer-react-hook";
import Display from "@/components/Display";
import StopwatchControls from "@/components/StopwatchControls";
// import TimerControls from "@/components/TimerControls";

const DisplayLogic = () => {
    const [time, setTime] = useState(
        {
            "seconds": 0,
            "minutes": 0,
            "hours": 0
        }
    );

    const [mode, setMode] = useState("");

    const [timerEditMode, setTimerEditMode] = useState(true);

    const [timer] = useTimer();

    const [playState, setPlayState] = useState(false);

    const handlePauseToggle = () => {
        console.log(playState)
        setPlayState((prevState) => !prevState);
        playState && (
            setTime(timer.getTimeValues().toString()),
            timer.pause()
        );
        !playState && timer.start();
    }

    const handleReset = () => {
        setPlayState(false);
        timer.reset();
        timer.stop();
    }

    const handleTimerDoubleClick = () => {
        setPlayState(false);
        setTimerEditMode(true);
        setTime(timer.getTimeValues().toString());
    }



    return (
        <>
            <button onClick={() => setMode("stopwatch")}>Stopwatch</button>
            <button onClick={() => setMode("Timer")}>Timer</button>
            {/* <Display mode={mode} time={playState ? time.getTimeValues().toString() : time} timerEditMode={timerEditMode} handleTimerDoubleClick={handleTimerDoubleClick} /> */}
            <Display mode={mode} time={timer.getTimeValues().toString()} timerEditMode={timerEditMode} handleTimerDoubleClick={handleTimerDoubleClick} />

            {mode == "stopwatch" ? (
                <>
                    <StopwatchControls playState={playState} handlePauseToggle={handlePauseToggle} handleReset={handleReset} />
                </>

            ) :
                <>
                    {/* <TimerControls playState={playState} handlePauseToggle={handlePauseToggle} handleReset={handleReset} /> */}
                    <p>Timer Controls</p>
                </>
            }
        </>


    )


}

export default DisplayLogic;