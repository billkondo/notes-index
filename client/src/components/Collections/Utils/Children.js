import React from 'react';
import { Button } from 'reactstrap'; 
import { connect } from 'react-redux';
import { array, func } from 'prop-types';

import Note from './Note';

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

const ChildrenContainer = ({ children }) => (
  <div className="collections-utils-children-container">
    <div className="notes">
      {
        children.map((child, index)  => <Note key={child.id} index={index%2} child={child}/>)
      }
    </div>
  </div>
);

const Children = ({ children, enterSearchMenu }) => (
  <div className="collections-utils-children">
    <ChildrenHeader enterSearchMenu={enterSearchMenu} />
    <ChildrenContainer children={children} />
  </div>
);

Children.propTypes = {
  children: array.isRequired, 
  enterSearchMenu: func.isRequired
}

export default connect(
  (state) => ({
    children: state.collectionsOperations.children
  })
)(Children);