import React from "react";
import CheckboxComp from "./Checkbox";

export default {
    title: 'Java-Frontend/Checkbox',
    component: CheckboxComp,
}

const Template = (args) => <CheckboxComp {...args} />

export const Unchecked = Template.bind({})
Unchecked.args = {
    label: 'Unchecked',
    checked: false,
    disabled: false,
}
export const Checked = Template.bind({})
Checked.args = {
    label: 'Checked',
    checked: true,
    disabled: false,
}
export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.args = {
    label: 'Disabled',
    checked: false,
    disabled: true,
}
export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
    label: 'Disabled',
    checked: true,
    disabled: true,
}