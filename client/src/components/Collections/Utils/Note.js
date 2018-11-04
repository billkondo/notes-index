import React from 'react';
import { connect } from 'react-redux';
import { object, number, func } from 'prop-types';
import classNames from 'classnames';

import ExitButton from '../../Buttons/ExitButton';
import { removeChildren } from '../../../actions/collections-operations';
import { addNote } from '../../../actions/search-menu';

class Note extends React.Component {
  state = {
    mouseOn: false
  }

  onMouseLeave = () => this.setState({ mouseOn: false });

  onMouseOver = () => {
    const { mouseOn } = this.state;
    if (mouseOn) return;
    this.setState({ mouseOn: true });
  }

  remove = () => {
    const { child , removeChildren, addNote } = this.props;
    
    removeChildren(child);
    addNote(child);
  }

  render() {
    const { mouseOn } = this.state;
    const { child, index } = this.props;

    return (
      <div 
        className={classNames("note", { "black": index == 0}, { "gray": index == 1} )}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
        {mouseOn && <ExitButton click={this.remove} styles={{ borderRadius: "0" }}/>}
        {child.title}
        { child.favorite && <i className="fas fa-star Favorite-Children" />}
      </div>
    );
  }
}

Note.propTypes = {
  child: object.isRequired,
  index: number.isRequired,
  removeChildren: func.isRequired,
  addNote: func.isRequired
}

export default connect(
  null, 
  { removeChildren, addNote }
)(Note);