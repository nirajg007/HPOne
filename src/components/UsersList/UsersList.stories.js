import React from 'react';
import UsersListComponent from './UsersListComponent';

export default {
  title: 'HPOneComponent/UsersList',
  component: UsersListComponent,

};

const Template = (args) => <UsersListComponent {...args}/>;
export const Component = Template.bind({});


Component.args = {
  pageSize: 5,
  rowsPerPageOptions: 10,
  checkboxSelection: true
};
