import React, { useState } from 'react'
import {
    makeStyles,
    Select,
    MenuItem,
    FormControl,
} from '@material-ui/core'
import { ButtonComp } from './ButtonCustom'
import './style.css'

const useStyles = makeStyles({
    container: {
        width: '468px',
        height: '100%',
        // border: '1px solid red',
        padding: '20px',
        overflow: 'auto',
    },
    headliner: {
        fontWeight: 700,
        fontSize: 36,
    },
    dayNameText: {
        width: '90px',
        margin: '0px 20px 0px 0px',
        gap: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    dropdownSection: {
        width: '300px',
        margin: '0px 20px 0px 0px',
        gap: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    dayAddLine: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
    },
    toSeparatorSpan: {
        padding: 10,
    }
})

export default function AvailabilityComp(props) {
    const classes = useStyles()
    const mondayAvail = props.prop1
    const setMondayAvail = props.prop2
    const tuesdayAvail = props.prop3
    const setTuesdayAvail = props.prop4
    const wednesdayAvail = props.prop5
    const setWednesdayAvail = props.prop6
    const thursdayAvail = props.prop7
    const setThursdayAvail = props.prop8
    const fridayAvail = props.prop9
    const setFridayAvail = props.prop10

    // add time availabilities to respective days
        // then sort chronologically by start time
    function addTimeAvail(dailySchedule, setDailySchedule) {
        if (dailySchedule.length === 0) {
            setDailySchedule([...dailySchedule, {
                id:  Math.floor(Math.random() * 1000000),
                start: 6,
                stop: 6.5,
                timeBEStart: "6:00:00",
                timeBEStop: "6:30:00"
            }])
        } else {
            setDailySchedule([...dailySchedule, {
                id:  Math.floor(Math.random() * 1000000),
                start: 6,
                stop: 6.5,
                timeBEStart: "6:00:00",
                timeBEStop: "6:30:00"
            }].sort((a,b)=>a.start-b.start)
            )
        }
    }
    // remove time availabilities to respective days
    function removeTimeAvail(id, dailySchedule, setDailySchedule) {
        setDailySchedule(dailySchedule.filter(timeAvail => timeAvail.id !== id))
    }
    // transform list of times info menuitems for the dropdown
    const menuItemValuesStart = timeIntervals.slice(0, timeIntervals.length - 1).map((interval, index)=>{
        return (
            <MenuItem key={index} value={interval.value}>{interval.time}</MenuItem>
        )}
    )
    const menuItemValuesStop = timeIntervals.slice(1).map((interval, index)=>{
        return (
            <MenuItem key={index} value={interval.value}>{interval.time}</MenuItem>
        )}
    )
    // return for the timeBE that corresponds to the given time value
    function whatTimeBEis (value) {
        let timeBE = ''
        timeBE = timeIntervals[timeIntervals.findIndex(timeElement=>{
            return timeElement.value === value
        })].timeBE
        return timeBE
    }


    // change start and stop time in respective day's state to the selected dropdown value
            // then, re-order times of daily schedule chronically by start times
    const changeStart = (event, id, dailySchedule, setDailySchedule) => {
        console.log(event, id, event.target.value)
        setDailySchedule(dailySchedule.map(timeAvail=>{
            // check if stop is before new start time
                // if so, change stop to start value + 30
            if (timeAvail.id === id) {
                if (timeAvail.stop <= event.target.value) {
                    return {
                        id: timeAvail.id,
                        start: event.target.value,
                        stop: event.target.value + .5,
                        timeBEStart: whatTimeBEis(event.target.value),
                        timeBEStop: whatTimeBEis(event.target.value + .5)
                    }
                }
                return {
                    id: timeAvail.id,
                    start: event.target.value,
                    stop: timeAvail.stop,
                    timeBEStart: whatTimeBEis(event.target.value),
                    timeBEStop: whatTimeBEis(timeAvail.stop)
                }
            }
            return timeAvail
        }).sort((a,b)=>a.start-b.start))
    };
    const changeStop = (event, id, dailySchedule, setDailySchedule) => {
        console.log(event, id, event.target.value)
        setDailySchedule(dailySchedule.map(timeAvail=>{
            if (timeAvail.id === id) {
                if (timeAvail.start >= event.target.value) {
                    return {
                        id: timeAvail.id,
                        start: event.target.value - 0.5,
                        stop: event.target.value,
                        timeBEStart: whatTimeBEis(event.target.value - 0.5),
                        timeBEStop: whatTimeBEis(event.target.value)
                    }
                }
                return {
                    id: timeAvail.id,
                    start: timeAvail.start,
                    stop: event.target.value,
                    timeBEStart: whatTimeBEis(timeAvail.start),
                    timeBEStop: whatTimeBEis(event.target.value)
                }
            }
            return timeAvail
        }))
    };
    // Time selector dropdowns and remove button component
    function TimeControl (props) {
        const timeSelectors = props.dailySchedule.map((timeAvail)=>{
            function handleChangeStart(e) {
                // update the timeAvail state
                changeStart(e, timeAvail.id, props.dailySchedule, props.dailyScheduleSetter)
            }
            function handleChangeStop(e) {
                changeStop(e, timeAvail.id, props.dailySchedule, props.dailyScheduleSetter)
            }

            return (
                <li key={timeAvail.id} style={{listStyle: 'none'}}>
                    <div className={classes.dayAddLine}>
                        <div className={classes.dropdownSection}>
                            <FormControl variant='outlined'>
                                <Select
                                    value={timeAvail.start}
                                    onChange={handleChangeStart}>
                                    {menuItemValuesStart}
                                </Select>
                            </FormControl>
                            <span className={classes.toSeparatorSpan}>TO</span>
                            <FormControl variant='outlined'>
                                <Select
                                    value={timeAvail.stop}
                                    onChange={handleChangeStop}>
                                    {menuItemValuesStop}
                                </Select>
                            </FormControl>
                        </div>
                        <ButtonComp
                            text={'-'}
                            onClick={()=>removeTimeAvail(timeAvail.id, props.dailySchedule, props.dailyScheduleSetter)}
                            />
                    </div>
                </li>
            )
        })
        return timeSelectors
    }

    // Render this
    return (
        <>
        <div className={classes.container}>
            <h2 className={classes.headliner}>My Availability</h2>
            {/* Monday */}
            <div>
                <div className={classes.dayAddLine}>
                    <p className={classes.dayNameText}>MONDAY</p>
                    <ButtonComp
                        name='Monday'
                        text={'+'}
                        onClick={()=>addTimeAvail(mondayAvail, setMondayAvail)}
                        />
                </div>
                <TimeControl
                    dailySchedule={mondayAvail}
                    dailyScheduleSetter={setMondayAvail}
                    day={'monday'} />
            </div>
            {/* Tuesday */}
            <div>
                <div className={classes.dayAddLine}>
                    <p className={classes.dayNameText}>TUESDAY</p>
                    <ButtonComp
                        text={'+'}
                        onClick={()=>addTimeAvail(tuesdayAvail, setTuesdayAvail)}
                        />
                </div>
                <TimeControl
                    dailySchedule={tuesdayAvail}
                    dailyScheduleSetter={setTuesdayAvail}
                    day={'tuesday'} />
            </div>
            {/* Wednesday */}
            <div>
                <div className={classes.dayAddLine}>
                    <p className={classes.dayNameText}>WEDNESDAY</p>
                    <ButtonComp
                        text={'+'}
                        onClick={()=>addTimeAvail(wednesdayAvail, setWednesdayAvail)}
                        />
                </div>
                <TimeControl
                    dailySchedule={wednesdayAvail}
                    dailyScheduleSetter={setWednesdayAvail}
                    day={'wednesday'} />
            </div>
            {/* Thursday */}
            <div>
                <div className={classes.dayAddLine}>
                    <p className={classes.dayNameText}>THURSDAY</p>
                    <ButtonComp
                        text={'+'}
                        onClick={()=>addTimeAvail(thursdayAvail, setThursdayAvail)}
                        />
                </div>
                <TimeControl
                    dailySchedule={thursdayAvail}
                    dailyScheduleSetter={setThursdayAvail}
                    day={'thursday'} />
            </div>
            {/* Friday */}
            <div>
                <div className={classes.dayAddLine}>
                    <p className={classes.dayNameText}>FRIDAY</p>
                    <ButtonComp
                        text={'+'}
                        onClick={()=>addTimeAvail(fridayAvail, setFridayAvail)}
                        />
                </div>
                <TimeControl
                    dailySchedule={fridayAvail}
                    dailyScheduleSetter={setFridayAvail}
                    day={'friday'} />
            </div>
        </div>
        {/* <div>
            <pre>
                {JSON.stringify({
                monday: mondayAvail,
                tuesday: tuesdayAvail,
                wednesday: wednesdayAvail,
                thursday: thursdayAvail,
                friday: fridayAvail,
                }, null, 2)}
            </pre>
        </div> */}
        </>
    )
}

// The values for the dropdowns
const timeIntervals = [
    {
        time: '6:00am',
        value: 6,
        timeBE: '06:00:00',
    },
    {
        time: '6:30am',
        value: 6.5,
        timeBE: '06:30:00',
    },
    {
        time: '7:00am',
        value: 7,
        timeBE: '07:00:00',
    },
    {
        time: '7:30am',
        value: 7.5,
        timeBE: '07:30:00',
    },
    {
        time: '8:00am',
        value: 8,
        timeBE: '08:00:00',
    },
    {
        time: '8:30am',
        value: 8.5,
        timeBE: '08:30:00',
    },
    {
        time: '9:00am',
        value: 9,
        timeBE: '09:00:00',
    },
    {
        time: '9:30am',
        value: 9.5,
        timeBE: '09:30:00',
    },
    {
        time: '10:00am',
        value: 10,
        timeBE: '10:00:00',
    },
    {
        time: '10:30am',
        value: 10.5,
        timeBE: '10:30:00',
    },
    {
        time: '11:00am',
        value: 11,
        timeBE: '11:00:00',
    },
    {
        time: '11:30am',
        value: 11.5,
        timeBE: '11:30:00',
    },
    {
        time: '12:00am',
        value: 12,
        timeBE: '12:00:00',
    },
    {
        time: '12:30am',
        value: 12.5,
        timeBE: '12:30:00',
    },
    {
        time: '1:00pm',
        value: 13,
        timeBE: '13:00:00',
    },
    {
        time: '1:30pm',
        value: 13.5,
        timeBE: '13:30:00',
    },
    {
        time: '2:00pm',
        value: 14,
        timeBE: '14:00:00',
    },
    {
        time: '2:30pm',
        value: 14.5,
        timeBE: '14:30:00',
    },
    {
        time: '3:00pm',
        value: 15,
        timeBE: '15:00:00',
    },
    {
        time: '3:30pm',
        value: 15.5,
        timeBE: '15:30:00',
    },
    {
        time: '4:00pm',
        value: 16,
        timeBE: '16:00:00',
    },
    {
        time: '4:30pm',
        value: 16.5,
        timeBE: '16:30:00',
    },
    {
        time: '5:00pm',
        value: 17,
        timeBE: '17:00:00',
    },
    {
        time: '5:30pm',
        value: 17.5,
        timeBE: '17:30:00',
    },
    {
        time: '6:00pm',
        value: 18,
        timeBE: '18:00:00',
    },
]