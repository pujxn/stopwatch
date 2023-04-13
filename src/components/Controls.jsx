import StopwatchControls from "@/components/StopwatchControls"

const Controls = ({ playState, toggle, stop, reset }) => {
    return (
        <>
            <StopwatchControls playState={playState} toggle={toggle} stop={stop} reset={reset} />
        </>
    )
}

export default Controls;