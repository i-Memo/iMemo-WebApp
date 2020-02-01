import React,{useEffect, useState} from 'react'
import '../clock.css'

function DateComponent() {
    const [date, setdate] = useState(new Date().toISOString().split("T")[0]);
    const [time, settime] = useState(new Date().getHours() + ":" + new Date().getMinutes())
    const getTime = () => {
        let today = '';
        if(parseInt(new Date().getHours()) < 10){
            today += '0' + new Date().getMinutes();
        } else today += new Date().getMinutes();
        
        if(parseInt(new Date().getMinutes()) < 10){
            today += ':0' + new Date().getMinutes();
        } else today += ':' + new Date().getMinutes();
    }
    const dateHandler = (event) => {
        setdate(event.target.value);
    }
    const timehandler = (event) => {
        alert(event.target.value + " " + time);
    }
    return (
        <React.Fragment>
            <input type="date" name="rem-date" min={new Date().toISOString().split("T")[0]} value={date} onChange={dateHandler} className="date-select"/>
            <input type="time" onChange={timehandler} value={time}/>
        </React.Fragment>
    )
}

export default DateComponent
