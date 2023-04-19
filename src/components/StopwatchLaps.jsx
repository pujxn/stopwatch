import { useState, useEffect } from "react";

const StopwatchLaps = ({ laps, calcMsFromStr }) => {

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
            {laps.map((ele, idx) => {
                return (
                    <p style={laps.length > 1 ? textStyle(idx) : {}} key={idx}>{ele}</p>
                )
            })}
        </>
    )
}

export default StopwatchLaps;