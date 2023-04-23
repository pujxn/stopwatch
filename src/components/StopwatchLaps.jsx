import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { calcMsFromStr } from "@/routes/DisplayLogic"

const StopwatchLaps = () => {

    const laps = useSelector(state => state.laps.value);
    const [fastestIdx, setFastestIdx] = useState(0);
    const [slowestIdx, setSlowestIdx] = useState(0);

    const textStyle = (idx) => {
        if (fastestIdx == slowestIdx || (idx != slowestIdx && idx != fastestIdx)) {
            return ({ "color": "black" })
        }
        else {
            if (idx == fastestIdx) {
                return ({ "color": "green" })
            }
            else {
                return ({ "color": "red" })
            }
        }
    }


    useEffect(() => {
        if (calcMsFromStr(laps.at(-1)) < calcMsFromStr(laps[fastestIdx])) {
            setFastestIdx(laps.length - 1);
        }
        if (calcMsFromStr(laps.at(-1)) > calcMsFromStr(laps[slowestIdx])) {
            setSlowestIdx(laps.length - 1);
        }
    }, [laps])



    return (
        <>
            {laps.length != 0 && laps.map((ele, idx) => {
                return (
                    <p style={laps.length > 1 ? textStyle(idx) : {}} key={idx}>{ele}</p>
                )
            })}
        </>
    )
}

export default StopwatchLaps;