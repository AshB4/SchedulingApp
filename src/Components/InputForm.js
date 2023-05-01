import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { styleGuideColors } from "../utilities"

const red = styleGuideColors.core.red;
const blue = styleGuideColors.core.blue;

const useStyles = makeStyles({
  normal: {
    backgroundColor: styleGuideColors.primary[400],
    borderRadius: '8px',
    padding: '10px 20px',
    color: styleGuideColors.core.blue,
    textTransform: 'none',
    fontFamily: 'Inter',
    '&:hover': {
      backgroundColor: blue
    },
    '&:focus': {
      outline: `3px solid ${blue}`,
      boxShadow: `inset 0px 0px 0px 2px ${blue}`,
    },
    '&:disabled': {
      backgroundColor: blue,
      color: blue,
    }
  },
  outline: {
    backgroundColor: blue,
    borderRadius: '8px',
    padding: '10px 20px',
    color: blue,
    boxShadow: `inset 0px 0px 0px 2px ${blue}`,
    textTransform: 'none',
    fontFamily: 'Inter',
    '&:hover': {
        boxShadow: `inset 0px 0px 0px 2px ${blue}`,
        backgroundColor: blue,
        color: blue,
    },
    '&:focus': {
        boxShadow: `0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #F1B93F, inset 0px 0px 0px 2px ${blue}`,
    }
  },
  error: {
    fontFamily: 'Inter',
    color: red,
    textTransform: 'none',
    backgroundColor: blue,
  }

})

export default function InputForm({type, text}) {

    
     const makeStyles = useStyles();
  
  const [title, setTitle] = useState('');
  const [helperText, setHelperText] = useState('')
  const [name, setName] = useState("");
  const [error, setError] = useState(false)

  const handleError= (e) => {
    e.preventDefault();
    setError(true)
    if (error == true){
      setHelperText('Incorrect Entry')
    }
  }
  
  return(
  <TextField
                type="text"
                value={name}
                // label=""
                onChange={(e) => {
                    setName(e.target.value);
                }}
                // This is a placeholder to show error state it is meant to emulate an incorrect password entry
                error={
                    !name
                        ?  false
                        :  true
                }
                variant = "outlined"
            />
  )
}

