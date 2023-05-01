import React, { useState } from 'react';
// import { SearchBars } from './SearchBars';
import {SearchBarsComp} from './SearchBarsComp';

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

// export default {
//   title: 'Java-Frontend/SearchBarsComp',
//   component: SearchBarsComp,
// };

// const Template = (args) => {
//   const [value, setValue] = useState('');
//   return <SearchBars {...args} Value={value} setValue={setValue} />;
// };

// export const Enabled = Template.bind({});
// Enabled.args = {
//   disabled: false,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   disabled: true,
// };

// export const WithValue = Template.bind({});
// WithValue.args = {
//   disabled: false,
//   Value: 'example search query',
// };


// import React from "react";
// import SearchBarsComp from "./SearchBarsComp";

// export default {
//     title: 'SearchBarComp',
//     component: SearchBar,
//     argTypes: { handleClick: {action: "handleClick"}}
//   }
  
//   const Template = (args) => <SearchBarsComp {...args} />
  
//   export const Default = Template.bind({})
//   Default.args = {
//     placeholder: 'Search...',
//   }
  
//   export const WithValue = Template.bind({})
//   WithValue.args = {
//     placeholder: 'Search...',
//     value: 'example',
//   }
  
//   export const Disabled = Template.bind({})
//   Disabled.args = {
//     placeholder: 'Search...',
//     disabled: true,
//   }
  
//   export const WithCustomStyles = Template.bind({})
//   WithCustomStyles.args = {
//     placeholder: 'Search...',
//     styles: {
//       container: (base) => ({
//         ...base,
//         border: '1px solid blue',
//         borderRadius: '5px',
//         padding: '5px',
//       }),
//       input: (base) => ({
//         ...base,
//         border: 'none',
//         outline: 'none',
//         fontSize: '16px',
//       }),
//       placeholder: (base) => ({
//         ...base,
//         color: 'gray',
//       }),
//     },
//   }

// SearchBarsComp.propTypes={
//     valueSB: PropTypes.string
// }