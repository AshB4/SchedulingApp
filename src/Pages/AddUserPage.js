import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vector from '../images/Sparq-Logo-White.png'
import { ButtonComp } from '../Components/ButtonCustom';
import AvailabilityComp from '../Components/AvailabilityComp';
import { Auth } from 'aws-amplify'
import { styleGuideColors } from '../utilities';
import AddUserForm from '../Components/AddUserForm';

const navy = styleGuideColors.sparq.navy
const white = styleGuideColors.core.white

const useStyles = makeStyles({
  container: {
    backgroundColor: white,
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    height: '100vh',
    // height: '100%',
    // minHeight: '100vh',
    fontFamily: 'Barlow',
  },
  headlineArea: {
    width: '17vw',
    minWidth: '200px',
    backgroundColor: navy,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '48px',
  },
  headlineGroup1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headlineItems: {
    width: '75%',
    marginBottom: '100px',
  },
  pageContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  headlineText: {
    textAlign: 'start',
    fontWeight: '700',
    fontSize: '20px',
    color: white,
    marginTop: '16px',
  },
  noHighlightText: {
    fontWeight: '400',
    fontSize: '20px',
    color: white,
  },
  highlightText: {
    fontWeight: '400',
    fontSize: '20px',
    color: navy,
    margin: 0,
  },
  noHighlight: {
    display: 'flex',
    width: '100%',
    height: '54px',
    paddingLeft: '25px',
    alignItems: 'center',
  },
  highlight: {
    display: 'flex',
    backgroundColor: white,
    width: '100%',
    height: '54px',
    paddingLeft: '25px',
    alignItems: 'center',
  },
  userProfilePH: {
    // border: '1px solid green',
    flexGrow: 1,
    // width: '788px',
    height: '100%',
  }

});

export default function AddUserPage() {
  const classes = useStyles();

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  const [ mondayAvail, setMondayAvail ] = useState([])
  const [ tuesdayAvail, setTuesdayAvail ] = useState([])
  const [ wednesdayAvail, setWednesdayAvail ] = useState([])
  const [ thursdayAvail, setThursdayAvail ] = useState([])
  const [ fridayAvail, setFridayAvail ] = useState([])
  const userAvailability = {
    Monday: mondayAvail,
    Tuesday: tuesdayAvail,
    Wednesday: wednesdayAvail,
    Thursday: thursdayAvail,
    Friday: fridayAvail,
  }
  let conflictDaysList = []
  let hasTimeConflicts = false
  function checkAvailabilityForConflicts() {
    for (const day in userAvailability) {
      const dailySchedule = userAvailability[day];
      if (dailySchedule.length > 1) {
        // go through dailySchedule to check if starts happen before stops
        for (let i=0; i<=dailySchedule.length-2; i++) {
          if (dailySchedule[i].stop > dailySchedule[i + 1].start) {
            hasTimeConflicts = true
            if (!conflictDaysList.includes(day)) {
              conflictDaysList.push(day)
            }
          }
        }
      }
    }
  }

  function handleSubmit () {
    // check if times overlap, if so, setHasTimeConflicts to true
    conflictDaysList = []
    checkAvailabilityForConflicts()
    let conflictDaysString = conflictDaysList.join(', ')
    if (hasTimeConflicts) {
      alert(`You have overlapping time of availability for the following day(s):\n- ${conflictDaysString}.\nPlease fix selections so the times do not overlap.`)
    } else {
      alert("Success, no Time Conflicts\n" + JSON.stringify(userAvailability, null, 2))
    }
  }


  return (
    <div className={classes.container} >
    <div className={classes.headlineArea}>
      <div className={classes.headlineGroup1}>
        <div className={classes.headlineItems}>
          <img src={vector} alt="SPARQ logo" width={'100%'}/>
          <h1 className={classes.headlineText}>JA Availability</h1>
        </div>
        <div className={classes.noHighlight}>
          <p className={classes.noHighlightText}>Dashboard</p>
        </div>
        <div className={classes.noHighlight}>
          <p className={classes.noHighlightText}>User Management</p>
        </div>
        <div className={classes.highlight}>
          <p className={classes.highlightText}>Profile</p>
        </div>
      </div>
        <ButtonComp text={'Sign Out'} onClick={signOut} />
    </div>
      <div className={classes.pageContent}>
        <div className={classes.userProfilePH}>

        <AddUserForm handleFormSubmit={()=>{console.log("clicked submit")}}></AddUserForm>
          {/* <ButtonComp text={'Save'} onClick={()=>alert(JSON.stringify(userAvailability, null, 2))} /> */}
          <ButtonComp text={'Save'} onClick={handleSubmit} />
        </div>
        <AvailabilityComp
          prop1={mondayAvail}
          prop2={setMondayAvail}
          prop3={tuesdayAvail}
          prop4={setTuesdayAvail}
          prop5={wednesdayAvail}
          prop6={setWednesdayAvail}
          prop7={thursdayAvail}
          prop8={setThursdayAvail}
          prop9={fridayAvail}
          prop10={setFridayAvail}
        />
        <></>
      </div>
    </div>
  );
}