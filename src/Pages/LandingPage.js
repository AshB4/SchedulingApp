import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../images/SPARQ-BG-white-gray.png'
import vector from '../images/Sparq-Logo-White.png'
import LoginCard from '../Components/LoginCard';
import { styleGuideColors } from '../utilities';

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${background})`,
    backgroundColor: styleGuideColors.core.white,
    display: 'flex',
    backgroundSize: 'cover',
    backgroundPositionX: 'right',
    // backgroundPositionY: 'bottom',
    height: '100vh',
    fontFamily: 'Barlow'
  },
  headlineArea: {
    width: '32vw',
    backgroundColor: styleGuideColors.sparq.navy,
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
  loginCard: {
    backgroundColor: 'white',
    boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    width: '428px',
    height: '482px',
    margin: '0 auto',
  },
});

export default function LandingPage() {
  const classes = useStyles();

  return (
      <div className={classes.container} >
          <div className={classes.headlineArea}>
            <div className={classes.headlineItems}>
              <img src={vector} alt="SPARQ Logo" width={'100%'}/>
              <h1 className={`${classes.headlineText} ${classes.title}`}>JA Availability</h1>
              <p className={`${classes.headlineText} ${classes.paragraph}`}>Welcome to the JA Availability application. This will allow users to see how many JA’s are available broken down by time blocks for optimal scheduling.</p>
            </div>
          </div>
          <div className={classes.pageContent}>
            <LoginCard />
          </div>
      </div>
  );
}
