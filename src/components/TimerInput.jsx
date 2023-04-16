const TimerInput = ({ timePart, timeValue, handleEdit }) => {
    return (
        // <input type="text" placeholder={timePart} defaultValue={timeValue} onBlur={(e) => handleEdit(timePart, e.target.value)} />
        <input onKeyDown={(e) => { e.key == "Enter" && e.preventDefault() }} type="text" placeholder={timePart} defaultValue={timeValue} onBlur={(e) => handleEdit(timePart, e.target.value)} />

    )
}

export default TimerInput;