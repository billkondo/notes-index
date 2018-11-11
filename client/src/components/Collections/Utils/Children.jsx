import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Note from './Note';

import { enterSearchMenu } from '../../../actions/search-menu';

import { childrenArray } from '../../../propTypes/propTypes';

const ChildrenHeader = ({ enterSearchMenuConnect }) => (
  <div className="collections-utils-children-header">
    <div className="title-box">
      <i className="fas fa-folder-open" />
      Children
    </div>

    <div className="controls">
      <Button color="info" className="button" onClick={enterSearchMenuConnect}>
        {' '}
        + Note
      </Button>
    </div>
  </div>
);

ChildrenHeader.propTypes = {
  enterSearchMenuConnect: func.isRequired
};

const ChildrenContainer = ({ arrayOfNotes }) => (
  <div className="collections-utils-children-container">
    <div className="notes">
      {arrayOfNotes.map((child, index) => (
        <Note key={child.id} index={index % 2} child={child} />
      ))}
    </div>
  </div>
);

ChildrenContainer.propTypes = {
  arrayOfNotes: childrenArray.isRequired
};

const Children = ({ children, enterSearchMenuConnect }) => (
  <div className="collections-utils-children">
    <ChildrenHeader enterSearchMenuConnect={enterSearchMenuConnect} />
    <ChildrenContainer arrayOfNotes={children} />
  </div>
);

Children.propTypes = {
  children: childrenArray.isRequired,
  enterSearchMenuConnect: func.isRequired
};

export default connect(
  state => ({
    children: state.collectionsOperations.children
  }),
  { enterSearchMenuConnect: enterSearchMenu }
)(Children);
