import useTimer from "easytimer-react-hook";
import Display from "@/components/Display"
import Controls from "@/components/Controls";
import { useState } from "react";
const DisplayLogic = () => {

    const [timer] = useTimer();

    const [playState, setPlayState] = useState(false);

    const handleToggle = () => {
        console.log(playState)
        setPlayState((prevState) => !prevState);
        playState && timer.pause();
        !playState && timer.start();
    }

    const handleStop = () => {
        setPlayState(false);
        timer.stop();
    }

    // const handleReset = () => {
    //     timer.stop();
    // }

    // timer.start();
    return (
        <>
            <Display time={timer.getTimeValues().toString()} />
            <Controls toggle={handleToggle} playState={playState} stop={handleStop} reset={() => timer.reset()} />
        </>

    )
}

export default DisplayLogic;