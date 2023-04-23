import useTimer from "easytimer-react-hook";

const StopwatchDisplay = ({ timer }) => {
    return (<p>{timer.getTimeValues().toString()}</p>)
}

export default StopwatchDisplay;