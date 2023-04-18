const TimerDisplay = ({ time, timerEditMode }) => {
    return (
        timerEditMode ? (
            <form id="timerEditForm">
                <input type="number" name="hours" placeholder="hours" />
                <input type="number" name="minutes" placeholder="minutes" />
                <input type="number" name="seconds" placeholder="seconds" />
            </form >
        ) :
            <p>{time}</p>);
}

export default TimerDisplay;