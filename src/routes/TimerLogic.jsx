import Display from "@/components/Display";
import Controls from "@/components/Controls";
import useTimer from "easytimer-react-hook";
import { useState } from "react";

const TimerLogic = () => {

    const [timer] = useTimer();
    const [editMode, setEditMode] = useState(true);
    const [time, setTime] = useState({
        "seconds": 0,
        "minutes": 0,
        "hours": 0
    });

    const handleEdit = (timePart, newVal) => {
        return setTime({
            ...time,
            [timePart]: newVal,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        timer.start({ "countdown": true, "startValues": time });
    }



    return (
        editMode ? (
            <>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" value={time.hours} placeholder="Hours" onChange={(e) => handleEdit("hours", e.target.value)} />
                    <input type="text" value={time.minutes} placeholder="Minutes" onChange={(e) => handleEdit("minutes", e.target.value)} />
                    <input type="text" value={time.seconds} placeholder="Seconds" onChange={(e) => handleEdit("seconds", e.target.value)} />
                    <button>Start</button>
                </form>
            </>
        )
            :

            (
                <>
                    <Display mode="timer" time={timer.getTimeValues().toString()} />
                    <Controls />
                </>
            )
    )
}

export default TimerLogic;