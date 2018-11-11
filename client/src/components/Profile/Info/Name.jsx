import React from 'react';
import { Input } from 'reactstrap';
import { string, func } from 'prop-types';

/*
  Component used by Info
  It receives the name of the account and allows the user to update it
*/

const Name = ({ name, onChangeName }) => (
  <div className="ProfileName">
    <span className="Title">Name</span>
    <Input value={name} className="Input" onChange={onChangeName} />
  </div>
);

Name.propTypes = {
  name: string.isRequired,
  onChangeName: func.isRequired
};

export default Name;
