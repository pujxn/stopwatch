import { useSelector, useDispatch } from "react-redux";


const TimerDisplay = ({ time, timerEditMode }) => {

    const dispatch = useDispatch();
    const prevTimerValue = useSelector(state => state.prevTimerValue.value);


    return (
        timerEditMode ? (
            <form id="timerEditForm">
                {["hours", "minutes", "seconds"].map((ele, idx) => {
                    return <input key={idx} defaultValue={prevTimerValue[ele] || 0} type="number" name={ele} placeholder={ele} />
                })}
                {/* <input defaultValue={prevTimerValue.minutes || 0} type="number" name="minutes" placeholder="minutes" />
                <input defaultValue={prevTimerValue.seconds || 0} type="number" name="seconds" placeholder="seconds" /> */}
            </form >
        ) :
            <p>{time}</p>);
}

export default TimerDisplay;