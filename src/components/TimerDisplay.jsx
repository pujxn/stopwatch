const TimerDisplay = ({ prevTimerValue, time, timerEditMode }) => {
    return (
        timerEditMode ? (
            <form id="timerEditForm">
                <input defaultValue={prevTimerValue.hours} type="number" name="hours" placeholder="hours" />
                <input defaultValue={prevTimerValue.minutes} type="number" name="minutes" placeholder="minutes" />
                <input defaultValue={prevTimerValue.seconds} type="number" name="seconds" placeholder="seconds" />
            </form >
        ) :
            <p>{time}</p>);
}

export default TimerDisplay;