const TimerDisplay = ({ prevTimerValue, time, timerEditMode }) => {
    return (
        timerEditMode ? (
            <form id="timerEditForm">
                <input defaultValue={prevTimerValue.hours || 0} type="number" name="hours" placeholder="hours" />
                <input defaultValue={prevTimerValue.minutes || 0} type="number" name="minutes" placeholder="minutes" />
                <input defaultValue={prevTimerValue.seconds || 0} type="number" name="seconds" placeholder="seconds" />
            </form >
        ) :
            <p>{time}</p>);
}

export default TimerDisplay;