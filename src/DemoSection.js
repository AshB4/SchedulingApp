import React, { useState } from "react";
import {
    Container,
    Button,
    TextField,
    AppBar,
    Toolbar,
} from "@material-ui/core/"
import CheckboxComp from "./Components/Checkbox";
import PreLoaderSpinner from "./Components/PreLoader";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { mainTheme, innerTheme } from "./utilities"
import example from './images/exampleBG.png'

import { ButtonComp } from "./Components/ButtonCustom"
import TextBoxComp from "./Components/TextBoxComp";

const useStyles = makeStyles({
  alert: {
    color: 'white',
    borderRadius: 4,
    padding: '6px 16px',
    marginTop: '6px',
    width: '50%',
    margin: 'auto',
  },
  container: {
    marginTop: '20px',
    marginBottom: '20px',
    padding: '0px 0px 20px 0px',
    backgroundColor: 'white',
  },
  div: {
    marginTop: '20px',
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
  },
})

export default function DemoSection(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: false,
    checkedB: true,
    isHungry: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const compVisible = props.compVisible

  return (
    <ThemeProvider theme={mainTheme}>
      {
      compVisible ?
      <>
        <Container className={classes.container}>
          <AppBar position="static">
            <Toolbar>
              <span style={{flexGrow: 1}}>Theme and Component Demo Section</span>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <div style={{marginTop: '20px'}}>
              <div style={{width: 'fit-content', margin: 'auto'}}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined" />
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry." />
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained">default</Button>
              </div>
              <div className={classes.alert}
                style={{backgroundColor:`${mainTheme.palette.error.main}`
                }}
              >This is an error section!</div>
              <div className={classes.alert}
                style={{backgroundColor:`${mainTheme.palette.warning.main}`
                }}
              >This is a warning section!</div>
              <div className={classes.alert}
                style={{backgroundColor:`${mainTheme.palette.info.main}`
                }}
              >This is an info section!</div>
              <div className={classes.alert}
                style={{backgroundColor:`${mainTheme.palette.success.main}`
                }}
              >This is a success section!</div>
              <div style={{
                width: 'fit-content',
                padding: '20px',
                margin: 'auto'}}>
                <Button variant="contained" color="secondary">Secondary</Button>
                <ThemeProvider theme={innerTheme}>
                  <Button variant="contained" color="secondary">Secondary</Button>
                  <Button variant="contained" color="secondary">Secondary</Button>
                </ThemeProvider>
                <Button variant="contained" color="secondary">Secondary</Button>
              </div>
          </div>
          <div className={classes.div} >
              <CheckboxComp label='Unchecked' name='checkedA' checked={state.checkedA}
                onClick={handleChange}/>
              <CheckboxComp label='Checked' name='checkedB' checked={state.checkedB}
                onClick={handleChange}/>
              <CheckboxComp label='Disabled' disabled/>
              <CheckboxComp
                label='Hunger'
                name='isHungry'
                checked={state.isHungry}
                onClick={handleChange}
                />
              <div style={{
                border: '1px solid red',
                display: 'flex',
                alignItems: 'center',
                padding: '0px 10px',
                borderRadius: '4px',
                }}>
                {state.isHungry? 'Eat Now' : 'Eat Later'}
              </div>
            </div>
          <div className={classes.div} >
            <ButtonComp text='Button Text' />
            <ButtonComp text='Button Text' disabled />
            <ButtonComp text='Button Text' type='outline' />
            <ButtonComp text='Button Text' type='outline' disabled />
            <ButtonComp text='Button Text' type='textBlue' />
            <ButtonComp text='Button Text' type='textRed' />
            <ButtonComp text='Button Text' type='textRed' disabled />
          </div>
          <div className={classes.div} >
            <TextBoxComp />
            <TextBoxComp disabled />
            <TextBoxComp error />
          </div>
        </Container>
        <br/>
        <Container style={{
          padding: '0px 0px 0px 240px',
          height: '930px',
          weight: '100vw',
          backgroundImage: `url(${example})`,
          backgroundRepeat: 'no-repeat',
          }}>
          <div style={{
          height: '930px',
          weight: '100vw',
          position: 'relative',
          }}>
            <Button variant="contained">test</Button>
            <PreLoaderSpinner />
          </div>
        </Container>
      </>
      :
      <></>
      }
    </ThemeProvider>
  )
}