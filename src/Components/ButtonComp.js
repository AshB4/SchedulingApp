import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { colorPalette } from "../utilities";

const white = colorPalette.core.white
const blue = colorPalette.primary[400]
const darkBlue = colorPalette.primary[500]
const gold = colorPalette.yellow[200]
const disabledGray = colorPalette.gray.disabledGray
const red = colorPalette.core.red

const useStyles = makeStyles({
  normal: {
    backgroundColor: colorPalette.primary[400],
    borderRadius: '8px',
    padding: '10px 20px',
    color: colorPalette.core.white,
    textTransform: 'none',
    fontFamily: 'Inter',
    '&:hover': {
      backgroundColor: darkBlue
    },
    '&:focus': {
      outline: `3px solid ${gold}`,
      boxShadow: `inset 0px 0px 0px 2px ${white}`,
    },
    '&:disabled': {
      backgroundColor: disabledGray,
      color: white,
    }
  },
  outline: {
    backgroundColor: white,
    borderRadius: '8px',
    padding: '10px 20px',
    color: blue,
    boxShadow: `inset 0px 0px 0px 2px ${blue}`,
    textTransform: 'none',
    fontFamily: 'Inter',
    '&:hover': {
        boxShadow: `inset 0px 0px 0px 2px ${darkBlue}`,
        backgroundColor: darkBlue,
        color: white,
    },
    '&:focus': {
        boxShadow: `0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #F1B93F, inset 0px 0px 0px 2px ${blue}`,
    }
  },
  textButtonBlue: {
    fontFamily: 'Inter',
    color: blue,
    textTransform: 'none',
  },
  textButtonRed: {
    fontFamily: 'Inter',
    color: red,
    textTransform: 'none',
  }
})

export default function ButtonComp({ type, text, disabled }) {
  const classes = useStyles();
    // to select different types of button component,
        // set type prop to:
        // for normal type - 'normal' or no prop at all
        // for outlined type - 'outline'
        // for text button type with red text - 'textRed' 
        // for text button type with blue text - 'textBlue' 

    if (type === 'outline') {
        return (
          disabled ?
          <Button className={classes.outline} disabled>{text}</Button> :
          <Button className={classes.outline}>{text}</Button>
        )
    } else if (type === 'textRed') {
        return (
          disabled ?
          <Button className={classes.textButtonRed} disabled>{text}</Button> :
          <Button className={classes.textButtonRed}>{text}</Button>
        )
    } else if (type === 'textBlue') {
        return (
          disabled ?
          <Button className={classes.textButtonBlue} disabled>{text}</Button> :
          <Button className={classes.textButtonBlue}>{text}</Button>
        )
    } else {
        return (
          disabled ?
          <Button className={classes.normal} disabled>{text}</Button> :
          <Button className={classes.normal}>{text}</Button>
        )
    }
}