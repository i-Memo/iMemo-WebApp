import React,{useState} from 'react'
import TimePicker from 'rc-time-picker';
import moment from 'moment'
import 'rc-time-picker/assets/index.css';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

function DateComponent() {
    const [date, setdate] = useState(new Date().toISOString().split("T")[0]);
    
    const [time, settime] = useState(now)
    const dateHandler = (event) => {
        setdate(event.target.value);
    }
    const timeSelector = (value) => {
        settime(value)
        console.log(value && value.format(format));
    }
    return (
        <React.Fragment>
            <input type="date" name="rem-date" min={new Date().toISOString().split("T")[0]} value={date} onChange={dateHandler} className="date-select"/>
            <TimePicker
                showSecond={false}
                defaultValue={time}
                className="timeSelector"
                onChange={timeSelector}
                format={format}
                use12Hours
                inputReadOnly
            />
        </React.Fragment>
    )
}

export default DateComponent
