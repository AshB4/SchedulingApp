// Important: The parent element of this component must have 'position' set to 'relative' for this component to cover the entire parent element and its other sibling components.
// This component will generally be used in the 'page-content' element

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styleGuideColors } from '../utilities';

const primary500 = styleGuideColors.primary[500]
const gray300 = styleGuideColors.gray[300]

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  bottom: {
    color: gray300,
  },
  top: {
    color: primary500,
    animationDuration: '800ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
    strokeDasharray: '30px 250px'
  },
  background:{
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: `rgba(0, 0, 0, 0.3)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default function PreLoaderSpinner(props) {
  const classes = useStyles();

  return (
    <div className={classes.background}>
        <div className={classes.root}>
        <CircularProgress
            variant="determinate"
            className={classes.bottom}
            size={100}
            thickness={4}
            {...props}
            value={100}
        />
        <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.top}
            classes={{
                circle: classes.circle,
            }}
            size={100}
            thickness={4}
            {...props}
        />
        </div>
    </div>
  );
}
