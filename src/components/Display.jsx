import StopwatchDisplay from "@/components/StopwatchDisplay"
import TimerDisplay from "@/components/TimerDisplay"

const Display = ({ mode, time }) => {
    return (
        mode == "stopwatch" ? (<StopwatchDisplay time={time} />) : <TimerDisplay time={time} />
    )
}

export default Display;