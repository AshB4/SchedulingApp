import React from "react";
import { ButtonComp } from "./ButtonCustom";

export default {
    title: 'Java-Frontend/Button-Custom',
    component: ButtonComp,
}

const Template = (args) => <ButtonComp {...args} />

export const Primary = Template.bind({})
Primary.args = {
    var_A: 1,
    var_B: 16,
    type: 'normal',
    text: 'Normal Button',
    disabled: false,
}
export const Secondary = Template.bind({})
Secondary.args = {
    type: 'outline',
    text: 'Outlined Button',
    disabled: false,
}
export const TextBlue = Template.bind({})
TextBlue.args = {
    type: 'textBlue',
    text: 'Text Button',
    disabled: false,
}
export const TextRed = Template.bind({})
TextRed.args = {
    type: 'textRed',
    text: 'Text Button',
    disabled: false,
}