import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';

import Fade from '../../High_Order/Fade';

import { noteObject, historyObject } from '../../../propTypes/propTypes';

class Card extends React.Component {
  edit = () => {
    const { note, history } = this.props;
    const { id } = note;

    history.push(`/Notes/Edit/${id}`);
  };

  view = () => {
    const { note, history } = this.props;
    const { id } = note;

    history.push(`/Notes/View/${id}`);
  };

  render() {
    const { note } = this.props;
    const { title, description, favorite } = note;

    return (
      <div className="notes-main-card">
        <div className="Notes-Card-Title">
          {truncate(title, { length: 15 })}
          {favorite && <i className="fas fa-star Favorite" />}
        </div>

        <textarea className="description" value={description} readOnly disabled />

        <div className="footer">
          <button type="button" className="icon edit" onClick={this.edit}>
            <i className="fas fa-edit" />
          </button>

          <button type="button" className="icon" onClick={this.view}>
            <i className="fas fa-eye" />
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  note: noteObject.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(state => ({
    idToLoad: state.notesData.idToLoad
  }))(Fade(Card))
);
