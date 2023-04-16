import useTimer from "easytimer-react-hook";
import Display from "@/components/Display"
import Controls from "@/components/Controls";
import { useState } from "react";
const StopwatchLogic = () => {

    const [time, setTime] = useState("00:00:00");
    const [timer] = useTimer();
    const [playState, setPlayState] = useState(false);



    const handleToggle = () => {
        console.log(playState)
        setPlayState((prevState) => !prevState);
        playState && (
            setTime(timer.getTimeValues().toString()),
            timer.pause()
        );
        !playState && timer.start();
    }

    const handleStop = () => {
        setTime(timer.getTimeValues().toString());
        setPlayState(false);
        timer.stop();
    }

    const handleReset = () => {
        setPlayState(true);
        timer.reset();
    }
    return (
        <>
            <h1>stopwatch</h1>
            <Display mode="stopwatch" time={playState ? timer.getTimeValues().toString() : time} />
            <Controls mode="stopwatch" toggle={handleToggle} playState={playState} stop={handleStop} reset={handleReset} />
        </>

    )
}

export default StopwatchLogic;
export { handleToggle };