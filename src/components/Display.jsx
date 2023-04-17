// import StopwatchDisplay from "@/components/StopwatchDisplay"
// import TimerDisplay from "@/components/TimerDisplay"

// const Display = ({ mode, time, handleDoubleClick }) => {
//     return (
//         mode == "stopwatch" ? (<StopwatchDisplay time={time} />) : <TimerDisplay time={time} handleDoubleClick={handleDoubleClick} />
//     )
// }

// export default Display;

const Display = ({ mode, time, timerEditMode, timerDoubleClick }) => {
    return (
        mode == "stopwatch" ? <p>{time}</p> : (
            timerEditMode ? <p>Timer Edit</p> : <p onDoubleClick={timerDoubleClick}>{time}</p>
        )
    );
}

export default Display;