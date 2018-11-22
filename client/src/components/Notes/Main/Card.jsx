import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import { func, bool, string } from 'prop-types';

import Fade from '../../High_Order/Fade';
import Loading from '../../Animation/Loading';

import { setID } from '../../../actions/notes-data';

import { noteObject, historyObject } from '../../../propTypes/propTypes';

class Card extends React.Component {
  edit = () => {
    const { note, history } = this.props;
    const { id } = note;

    history.push(`/Notes/Edit/${id}`);
  };

  view = () => {
    const { note } = this.props;
    const { id } = note;
    const { setIDConnect } = this.props;

    setIDConnect(id);
  };

  render() {
    const { note, noteIsLoading, idToLoad } = this.props;
    const { title, description, favorite, id } = note;

    return (
      <div className="notes-main-card">
        <div className="Notes-Card-Title">
          {truncate(title, { length: 15 })}
          {favorite && <i className="fas fa-star Favorite" />}
        </div>

        <textarea className="description" value={description} readOnly disabled />

        <div className="footer">
          {noteIsLoading && idToLoad === id && (
            <Loading
              positionStyle={{
                position: 'absolute',
                fontSize: '0.9 rem',
                left: 0
              }}
              iconStyle=" font-size-1_2-rem"
            />
          )}

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
  setIDConnect: func.isRequired,
  noteIsLoading: bool.isRequired,
  idToLoad: string.isRequired,
  history: historyObject.isRequired
};

export default withRouter(
  connect(
    state => ({
      noteIsLoading: state.view.noteIsLoading,
      idToLoad: state.notesData.idToLoad
    }),
    { setIDConnect: setID }
  )(Fade(Card))
);
