import { useSelector } from "react-redux";
import styles from "@/styles/Timer.module.css"
// import { calcMsFromStr } from "@/routes/DisplayLogic";
import { useState, useEffect } from "react";


const TimerDisplay = ({ timer }) => {


    // const dispatch = useDispatch();
    const prevTimerValue = useSelector(state => state.prevTimerValue.value);
    const timerEditMode = useSelector(state => state.timerEditMode.value);

    const [timerMultiplier, setTimerMultiplier] = useState(0);
    const [initialTimer, setInitialTimer] = useState(10);

    // let timerRingVal = 283 - Math.floor(283 / initialTimer) * (timerMultiplier);
    let timerRingVal = !timerEditMode ? (283 - Math.floor(283 / initialTimer) * (initialTimer - calcSecFromStr(timer.getTimeValues().toString()))) : 0;


    console.log(timer.getTimeValues().toString(), calcSecFromStr(timer.getTimeValues().toString()), timerMultiplier, initialTimer, timerRingVal);
    const COLOR_CODES = {
        info: {
            color: "green"
        }
    };

    let remainingPathColor = COLOR_CODES.info.color;


    // console.log(totalTimeInSec);
    // let perSecDeltaInRing = 0;
    // console.log(perSecDeltaInRing);

    // useEffect(() => {
    //     (timer.getTimeValues().seconds != 10 && !timerEditMode) && setTimerMultiplier((prevState) => prevState + 1);
    // }, [timer.getTimeValues().seconds]);

    // useEffect(() => {
    //     setInitialTimer
    // }, [])

    return (
        timerEditMode ? (
            <form id="timerEditForm">
                {["hours", "minutes", "seconds"].map((ele, idx) => {
                    return <input key={idx} defaultValue={prevTimerValue[ele] || 0} type="number" name={ele} placeholder={ele} />
                })}
            </form >
        ) :
            // <p>{timer.getTimeValues().toString()}</p>; --> original time render, can always revert to this
            <div className={styles["base-timer"]}>
                <svg className={styles["base-timer__svg"]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className={styles["base-timer__circle"]}>
                        <circle className={styles["base-timer__path-elapsed"]} cx="50" cy="50" r="45" />
                        <path id="base-timer-path-remaining" strokeDasharray={`${timerRingVal} 283`} className={`${styles["base-timer__path-remaining"]} ${styles["green"]}`}
                            d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                              ">
                        </path>
                    </g>
                </svg>
                <span id="base-timer-label" className={styles["base-timer__label"]}>{timer.getTimeValues().toString()}</span>
            </div >

    )
}

export const calcSecFromStr = (hms) => {
    let [hours, minutes, seconds] = hms.split(":").map(Number);
    let totalTimeInSec = hours * 3600 + minutes * 60 + seconds;
    return totalTimeInSec;
}

export default TimerDisplay;

