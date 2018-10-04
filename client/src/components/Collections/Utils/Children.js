import React from 'react';
import { Button } from 'reactstrap'; 
import propTypes from 'prop-types';

const ChildrenHeader = ({ enterSearchMenu }) => (
  <div className="collections-utils-children-header">
    <div className="title-box">
        <i className="fas fa-folder-open" />
        Children
    </div>

    <div className="controls">
      {/* <Button className="button"> +  Collection</Button> */}
      <Button className="button" onClick={enterSearchMenu} > +  Note</Button>
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

const Children = ({ enterSearchMenu }) => (
  <div className="collections-utils-children">
    <ChildrenHeader enterSearchMenu={enterSearchMenu} />
    <ChildrenContainer />
  </div>
);

Children.propTypes = {
  enterSearchMenu: propTypes.func.isRequired
}

export default Children;