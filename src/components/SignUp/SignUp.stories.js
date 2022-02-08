import React from 'react';
import SignUpComponent from './SignUpComponent';

export default {
  title: 'HPOneComponent/SignUp',
  component: SignUpComponent,

};

const Template = (args) => <SignUpComponent {...args} />;

export const Component = Template.bind({});
Component.args = {
  action: 'https://storybook.js.org/docs/react/addons/addons-api',
};