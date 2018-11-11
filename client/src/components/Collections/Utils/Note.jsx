import React from 'react';
import { connect } from 'react-redux';
import { number, func } from 'prop-types';
import classNames from 'classnames';

import ExitButton from '../../Buttons/ExitButton';
import { removeChildren } from '../../../actions/collections-operations';
import { addNote } from '../../../actions/search-menu';

import { noteObject } from '../../../propTypes/propTypes';

class Note extends React.Component {
  state = {
    mouseOn: false
  };

  onMouseLeave = () => this.setState({ mouseOn: false });

  onMouseOver = () => {
    const { mouseOn } = this.state;
    if (mouseOn) return;
    this.setState({ mouseOn: true });
  };

  onFocus = () => this.setState({ mouseOn: true });

  onBlur = () => this.setState({ mouseOn: false });

  remove = () => {
    const { child, removeChidrenConnect, addNoteConnect } = this.props;

    removeChidrenConnect(child);
    addNoteConnect(child);
  };

  render() {
    const { mouseOn } = this.state;
    const { child, index } = this.props;

    return (
      <div
        className={classNames('note', { black: index === 0 }, { gray: index === 1 })}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {mouseOn && <ExitButton click={this.remove} styles={{ borderRadius: '0' }} />}
        {child.title}
        {child.favorite && <i className="fas fa-star Favorite-Children" />}
      </div>
    );
  }
}

Note.propTypes = {
  child: noteObject.isRequired,
  index: number.isRequired,
  removeChidrenConnect: func.isRequired,
  addNoteConnect: func.isRequired
};

export default connect(
  null,
  {
    removeChidrenConnect: removeChildren,
    addNoteConnect: addNote
  }
)(Note);
