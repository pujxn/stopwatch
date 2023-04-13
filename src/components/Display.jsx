import StopwatchDisplay from "@/components/StopwatchDisplay"
import TimerDisplay from "@/components/TimerDisplay"

const Display = ({ mode, time, handleDoubleClick }) => {
    return (
        mode == "stopwatch" ? (<StopwatchDisplay time={time} />) : <TimerDisplay time={time} handleDoubleClick={handleDoubleClick} />
    )
}

export default Display;