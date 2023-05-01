import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ButtonComp } from './ButtonCustom';
import CheckboxComp from '../Components/CheckBox';
import { TextField, PasswordField } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify'
import './style.css'


const useStyles = makeStyles({
  root: {
    backgroundColor: 'makeStyles.core.white',
    boxShadow:
      '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    width: '428px',
    height: '482px',
    margin: '0 auto',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headline: {
    fontWeight: 700,
    fontSize: 36,
    margin: 0,
    paddingTop: 40,
    letterSpacing: -1,
  },
  signup: {
    marginTop: 16,
    height: 52,
    display: 'flex',
    justifyContent: 'start',
    fontSize: 16,
  },
  inputSection: {
    marginTop: 16,
    height: 62,
    width: '100%',
  },
  textBoxLabel: {
    margin: '0px 0px 8px',
    textAlign: 'start',
    fontSize: 12,
    fontWeight: 600,
  },
  buttonSection: {
    marginTop: 4,
    display: 'flex',
    justifyContent: 'start',
  },
  rememberSection: {
    position: 'relative',
    right: 9,
    marginTop: 16,
    width: 372,
    height: 52,
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputField: {
    textAlign: 'start',
    borderRadius: 8,
  }
});

export default function LoginCard() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  async function signIn() {
    try {
      const user = await Auth.signIn(email, password);
      console.log('user', user)
      setHasError(false)
    } catch (error) {
      console.log('error signing in', error);
      setHasError(true)
    }
  }

  return (

    <div className={classes.root}>
      <div style={{ width: '363px' }}>
        <h2 className={classes.headline}>Login to your account</h2>
        <div className={classes.signup}>
          <p
            style={{
              position: 'relative',
              top: -2,
              marginRight: '40px',
            }}
          >
            Don't have an account yet?
          </p>
          <ButtonComp type={'textBlue'} text={'Sign up'} />
        </div>

        <div className={classes.inputSection}>
          <p className={classes.textBoxLabel}>EMAIL</p>
          <TextField className={`${classes.inputField} email`}
            placeholder="name@example.com"
            label="EMAIL"
            labelHidden
            errorMessage="Error"
            hasError={false}
            isDisabled={false}
            value={Auth.setEmail}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>

        <div className={classes.inputSection}>
          <p className={classes.textBoxLabel}>PASSWORD</p>
          <PasswordField className={`${classes.inputField} pass`}
            autoComplete="new-password"
            errorMessage="Error"
            hasError={hasError}
            isDisabled={false}
            isRequired={true}
            placeholder="Password"
            size="regular"
            value={Auth.PasswordField}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>

        <div className={classes.rememberSection}>
          <CheckboxComp
           label="Remember Me" />
          <ButtonComp
          type={'textBlue'}
          text={'Forgot Password'}
          />
        </div>

        <div className={classes.buttonSection}>
          <ButtonComp
          type={'normal'}
          text={'Sign In'}
          onClick={Auth.signIn}
          />
        </div>
      </div>
    </div>
  );
}
