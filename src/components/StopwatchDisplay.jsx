import useTimer from "easytimer-react-hook";

// const StopwatchDisplay = ({ time }) => {
const StopwatchDisplay = ({ timer }) => {
    // const [timer] = useTimer();
    return (<p>{timer.getTimeValues().toString()}</p>)
}

export default StopwatchDisplay;