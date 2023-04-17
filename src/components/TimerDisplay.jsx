const TimerDisplay = ({ time, timerEditMode, handlePauseToggle }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        handlePauseToggle(values);
    }

    return (
        timerEditMode ? (
            <form onSubmit={handleSubmit} id="timerEditForm">
                <input type="text" name="hours" />
                <input type="text" name="minutes" />
                <input type="text" name="seconds" />
            </form >
        ) :
            <p>{time}</p>);
}

export default TimerDisplay;