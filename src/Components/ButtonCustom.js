import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { styleGuideColors } from "../utilities";
import PropTypes from 'prop-types'

const white = styleGuideColors.core.white
const blue = styleGuideColors.sparq.navy
const hoverBlue = styleGuideColors.sparq.blue
const gold = styleGuideColors.orange[200]
const disabledGray = styleGuideColors.gray.disabledGray
const red = styleGuideColors.core.red

const useStyles = makeStyles({
  button: {
    borderRadius: '8px',
    padding: '10px 20px',
    height: '41px',
    fontFamily: 'Inter, sans-serif',
  },
  normal: {
    backgroundColor: blue,
    color: styleGuideColors.core.white,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: hoverBlue
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
    color: blue,
    boxShadow: `inset 0px 0px 0px 2px ${blue}`,
    textTransform: 'none',
    '&:hover': {
        boxShadow: `inset 0px 0px 0px 2px ${hoverBlue}`,
        backgroundColor: hoverBlue,
        color: white,
    },
    '&:focus': {
        boxShadow: `0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #F1B93F, inset 0px 0px 0px 2px ${blue}`,
    },
    '&:disabled': {
        backgroundColor: disabledGray,
        color: white,
    }
  },
  textButtonBlue: {
    color: blue,
    textTransform: 'none',
  },
  textButtonRed: {
    color: red,
    textTransform: 'none',
  }
})

export function ButtonComp(props) {
  const classes = useStyles();
    // to select different types of button component,
        // set type prop to:
        // for normal type - 'normal' or no prop at all
        // for outlined type - 'outline'
        // for text button type with red text - 'textRed'
        // for text button type with blue text - 'textBlue'

    let style = classes.normal
    switch (props.type) {
      case 'outline':
        style = classes.outline
        break
      case 'textBlue':
        style = classes.textButtonBlue
        break
      case 'textRed':
        style = classes.textButtonRed
        break
    }

    return (
      <Button
        className={`${classes.button} ${style}`}
        {...props}
      >
        {props.text}
      </Button>
    )

}

ButtonComp.propTypes = {
    type: PropTypes.oneOf(['normal', 'outline', 'textBlue', 'textRed']),
    text: PropTypes.string,
    disabled: PropTypes.bool,
}
