import React, { useState } from 'react';
import { makeStyles, Container } from '@material-ui/core';
import CheckboxComp from '../components/Checkbox';
import { ButtonComp } from '../components/ButtonCustom';
import TextBoxComp from '../components/TextBoxCustom';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        margin: '20px 20px 0px 20px',
        padding: '40px 20px 40px 20px',
        width: '95vw'
    }
})

export default function DemoPage() {
    const classes = useStyles()
    const [ state, setState ] = useState({
        John: true,
        Bob: false,
    })
    function handleChange (event) {
        setState({...state, [event.target.name]: event.target.checked });
        console.log('checked', state)
    }
    const { John, Bob } = state
    return (
        <>
            {/* <div>I am always visible</div>
            <Authenticator>
                {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
                )}
            </Authenticator> */}
            <Container className={classes.root}>
                <h1>The Demo Page</h1>
                <CheckboxComp
                    label='John'
                    name='John'
                    checked={John}
                    onChange={handleChange}
                />
                <CheckboxComp
                    label='Bob'
                    name='Bob'
                    checked={Bob}
                    onChange={handleChange}
                />
                <ButtonComp
                    text={"Button Text"}
                    type={'normal'}
                />
                <ButtonComp
                    text={"Button Text"}
                    type={'outline'}
                />
                <TextBoxComp
                    type='text'
                    placeholder='Simple Empty'
                />
                <TextBoxComp
                    type='text'
                    placeholder='Danger Input'
                    helpertext='Oh Snape! There was an error'
                    error='true'
                />
                <TextBoxComp
                    type='text'
                    placeholder='Disabled'
                    disabled
                />
            </Container>
        </>
    )
}