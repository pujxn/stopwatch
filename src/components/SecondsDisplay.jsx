import { useState, useEffect } from "react";

const SecondsDisplay = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log(seconds)
        setTimeout(() => {
            setSeconds((prevState) => (prevState + 1) % 60);
        }, 1000)
    }, [seconds])

    return (
        <span>{seconds}</span>
    )
}

export default SecondsDisplay;