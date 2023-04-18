const StopwatchLaps = ({ laps }) => {
    return (
        <>
            {laps.map((ele, idx) => {
                return (
                    <p key={idx}>{ele}</p>
                )
            })}
        </>
    )
}

export default StopwatchLaps;