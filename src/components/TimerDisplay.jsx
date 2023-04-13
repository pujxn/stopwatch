const TimerDisplay = ({ time, handleDoubleClick }) => {
    return (<p onDoubleClick={handleDoubleClick}>{time}</p>);
}

export default TimerDisplay;