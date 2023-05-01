// This is where all of the components/features will go to be demonstrated
import React from "react";
import ButtonComp from "./ButtonComp";

export default function DemoSection() {

    return (
        <>
            <h2>Button Component Demo Section</h2>
            <ButtonComp 
                type={'normal'}
                text={'Button text'}
                disabled={false} />
            <ButtonComp 
                type={'outline'}
                text={'Button text'}
                disabled={false} />
            <ButtonComp 
                type={'textBlue'}
                text={'Button text'}
                disabled={false} />
            <ButtonComp 
                type={'textRed'}
                text={'Button text'}
                disabled={true} />
        </>
    )
}