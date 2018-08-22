import React from 'react';
import propTypes from 'prop-types';
import AddButton from '../../Buttons/AddButton';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const HeaderFromTags = ({ tag, writeTag, handleEnter, submitTag}) => (
  <div id="tags-header-note">
    <div id="title"> Tags </div>

    <div id="write-menu">
      <InputGroup>
        <InputGroupAddon addonType="prepend"> # </InputGroupAddon>
        <Input placeholder="tag" onChange={writeTag} value={tag} onKeyPress={handleEnter} />
      </InputGroup>

      <AddButton click={submitTag} />
    </div>
  </div>
);

HeaderFromTags.propTypes = {
  writeTag: propTypes.func, 
  tag: propTypes.string, 
  handleEnter: propTypes.func, 
  submitTag: propTypes.func
}

export default HeaderFromTags;