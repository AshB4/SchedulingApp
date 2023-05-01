import React from "react";
import PreLoaderSpinner from "./PreLoader"

export default {
    title: 'Java-Frontend/Pre-Loader',
    component: PreLoaderSpinner,
}

const Template = (args) => <PreLoaderSpinner {...args} />

export const Default = Template.bind({})
Default.args = {

}