import React from "react";
import TextBoxComp from "./TextBoxComp";


export default {
    title: 'Java-Frontend/Text Box component',
    component: TextBox,
}

const Template = (args) => <TextBoxComp {...args} />

export const EmptyState = Template.bind({})
EmptyState.args = {
    error: false,
    disabled: false,
}
export const DisabledState = Template.bind({})
DisabledState.args = {
    error: false,
    disabled: true,
}
export const ErrorState = Template.bind({})
ErrorState.args = {
    error: true,
    disabled: false,
}