import moment from 'moment'
import { useState } from 'react'
import Calendar from './Calendar'

function ShowCalendar(){
    let year = moment().year()
    //let month = moment().month()

    const [month, setMonth] = useState(moment().month())

    const moveCalendar = (event) => {
        if (event.target.value === "prev"){
            if (month >= 1){
                setMonth(month-1)
            }
        } else {
            if (month <= 10){
                setMonth(month+1)    
            }
        }
    }

    return (
        <>
            <div className='header'>
                <h2>Calendar</h2>
                <div className='selectBar'>
                    <button className='btn' value='prev' onClick={moveCalendar}>前の月</button>
                    <button className='btn' value='next' onClick={moveCalendar}>次の月</button>
                </div>
            </div>
            <div className='calendar'>
                <Calendar
                    year = {year}
                    month = {month}
                    key = {year+month}
                />
            </div>
        </>
    )
}

export default ShowCalendar;