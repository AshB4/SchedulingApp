// This is a component made of multiple components to demonstrate that MUI themes and their wrappers can be applied to components that are used in Storybook
import React from 'react'
import { ThemeProvider } from "@material-ui/styles";
import { mainTheme, innerTheme } from "../utilities"
import { Button } from "@material-ui/core"


export default function MuiThemeDemo () {

    return (
        <ThemeProvider theme={mainTheme}>
            <Button variant='contained' color='secondary'>Outer Button</Button>
            <ThemeProvider theme={innerTheme}>
                <Button variant='contained' color='secondary'>Inner Button</Button>
                <Button variant='contained' color='secondary'>Inner Button</Button>
            </ThemeProvider>
            <Button variant='contained' color='secondary'>Outer Button</Button>
        </ThemeProvider>
    )
}
