import Display from "@/components/Display";
import Controls from "@/components/Controls";
import useTimer from "easytimer-react-hook";
import { useState, useEffect } from "react";
import TimerInput from "@/components/TimerInput";


const TimerLogic = () => {
    const [timer] = useTimer();
    const [editMode, setEditMode] = useState(true);
    const [time, setTime] = useState({
        "seconds": 0,
        "minutes": 0,
        "hours": 0
    });

    const handleEdit = (timePart, newVal) => {
        timer.stop();
        setTime({
            ...time,
            [timePart]: newVal
        })
        setEditMode(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
        timer.start({ "countdown": true, "startValues": time });
    }

    const handleDoubleClick = () => {
        console.log("Double clicked");
        setEditMode(true);
        setTime({
            "hours": timer.getTimeValues().hours.toString(),
            "minutes": timer.getTimeValues().minutes.toString(),
            "seconds": timer.getTimeValues().seconds.toString(),
        })
        timer.stop();
    }

    useEffect(() => {
        !editMode && timer.start({ "countdown": true, "startValues": time });
    }, [time])


    return (
        editMode ? (
            <>
                <form onSubmit={(e) => handleSubmit(e)}>

                    {Object.keys(time).map((ele, idx) => {
                        return (
                            <TimerInput key={idx} timePart={ele} timeValue={time[ele]} handleEdit={handleEdit} />
                        )
                    })}
                    <button>Start</button>
                </form>
            </>
        )
            :

            (
                <>
                    <Display mode="timer" time={timer.getTimeValues().toString()} handleDoubleClick={handleDoubleClick} />
                    <Controls />
                </>
            )
    )
}

export default TimerLogic;