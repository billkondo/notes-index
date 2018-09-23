import React from 'react';
import { Button } from 'reactstrap'; 
import propTypes from 'prop-types';

const ChildrenHeader = () => (
  <div className="collections-utils-children-header">
    <div className="title-box">
        <i className="fas fa-folder-open" />
        Children
    </div>

    <div className="controls">
      <Button className="button"> +  Collection</Button>
      <Button className="button"> +  Note</Button>
    </div>
  </div>
);

const ChildrenContainer = () => (
  <div className="collections-utils-children-container">
    <div className="collections">
    </div>
    <div className="notes">
    </div>
  </div>
);

const Children = ({ }) => (
  <div className="collections-utils-children">
    <ChildrenHeader />
    <ChildrenContainer />
  </div>
);

export default Children;