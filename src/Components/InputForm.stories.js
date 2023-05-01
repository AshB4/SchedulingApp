import React from 'react';

import InputForm from './InputForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Java Frontend/InputForm',
  component: InputForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

};




// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputForm {...args} />;


// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    label: 'primary',
    type: 'text'
}
export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    label: 'secondary',
}

export const ErrorState = Template.bind({})
ErrorState.args = {
    error: true,
    disabled: false,
}

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

// export const Primary = Template.bind({})
// Primary.args = {
//     var_A: 1,
//     var_B: 16,
//     type: 'normal',
//     text: 'Normal Button',
//     disabled: false,
// }
