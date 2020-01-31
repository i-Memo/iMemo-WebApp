import React,{useEffect, useState} from 'react'

function DateComponent() {
    const [date, setdate] = useState(new Date().toLocaleDateString())
    const [n, setn] = useState(0)
    const dateHandler = (event) => {
        alert(event.target.value);
    }
    return (
        <React.Fragment>
            <input type="date" min='31-01-2020' onChange={dateHandler} className="date-select"/>
            <input type="number" min="1" max="31" value={date} id="date" onChange={dateHandler} required/>
            <div onClick={() => {setn(n+1)}}>{n}</div>
        </React.Fragment>
    )
}

export default DateComponent
