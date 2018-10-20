import React from 'react';
import { InputGroup, Input } from 'reactstrap';
import classNames from 'classnames';
import { string, number } from 'prop-types';

const Description = ({ description, flag }) => (
  <div className="description">
    <i className="fas fa-book book" />

    <InputGroup>
      <Input 
        value={description} 
        readOnly={true} 
        type="textarea"
        rows="7"
        className={
          classNames(
            "input", 
            { "CollectionPageSmall": flag === 0 },
            { "NotePageSmall": flag === 1}
        )}
        disabled
      />
    </InputGroup>
  </div>
);

Description.propTypes = {
  description: string.isRequired,
  flag: number.isRequired
}

export default Description;