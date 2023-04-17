// import useTimer from "easytimer-react-hook";
// import Display from "@/components/Display"
// import Controls from "@/components/Controls";
// import { useState } from "react";
// const StopwatchLogic = ({ mode, playState, time, handlePauseToggle, handleReset }) => {

//     // const [time, setTime] = useState("00:00:00");
//     // const [timer] = useTimer();
//     // const [playState, setPlayState] = useState(false);



//     // const handleToggle = () => {
//     //     console.log(playState)
//     //     setPlayState((prevState) => !prevState);
//     //     playState && (
//     //         setTime(timer.getTimeValues().toString()),
//     //         timer.pause()
//     //     );
//     //     !playState && timer.start();
//     // }

//     // const handleStop = () => {
//     //     setTime(timer.getTimeValues().toString());
//     //     setPlayState(false);
//     //     timer.stop();
//     // }

//     // const handleReset = () => {
//     //     setPlayState(true);
//     //     timer.reset();
//     // }
//     return (
//         <>
//             <h1>stopwatch</h1>
//             <Display time={time} />
//             <Controls mode={mode} handlePauseToggle={handlePauseToggle} handleReset={handleReset} playState={playState} />
//         </>

//     )
// }

// export default StopwatchLogic;
// // export { handleToggle };