import React from "react";
import { ButtonSimple } from './ButtonSimple'

export default {
    title: 'Java-Frontend/Button-Standard',
    component: ButtonSimple,
}

const Template = (args) => <ButtonSimple {...args} />

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    label: 'primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    label: 'secondary',
}