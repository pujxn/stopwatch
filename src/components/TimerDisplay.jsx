import { useSelector, useDispatch } from "react-redux";


const TimerDisplay = ({ timer }) => {

    const dispatch = useDispatch();
    const prevTimerValue = useSelector(state => state.prevTimerValue.value);
    const timerEditMode = useSelector(state => state.timerEditMode.value);


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
            <p>{timer.getTimeValues().toString()}</p>);
}

export default TimerDisplay;