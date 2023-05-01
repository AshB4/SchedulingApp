import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vector from '../images/Vector.png'


const useStyles = makeStyles({
  container: {
    backgroundColor: '#ffffff' ,
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    height: '100vh',
    fontFamily: 'Inter'
  },
  headlineArea: {
    width: '32vw',
    backgroundColor: '#002B49', //color
    padding: '114px 64px 96px 64px',
  },
  headlineItems: {
    flexGrow: 1,
  },
  pageContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  headlineText: {
    textAlign: 'start',
    color: 'white',
    marginTop: '56px',
  },
  title: {
    fontSize: '40px',
  },
  paragraph: {
    fontSize: '16px',
  },

});

export default function HomePage() {
  const classes = useStyles();

  return (
      <div className={classes.container} >
          <div className={classes.headlineArea}>
            <div className={classes.headlineItems}>
              <img src={vector} alt="RSI Logo" width={'100%'}/>
              <h1 className={`${classes.headlineText} ${classes.title}`}>JA Availability</h1>
              <p className={`${classes.headlineText} ${classes.paragraph}`}>Welcome</p>
            </div>
          </div>
          <div className={classes.pageContent}>
          </div>
      </div>
  );
}