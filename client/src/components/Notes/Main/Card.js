import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import { object, func, bool, string } from 'prop-types';

import Fade from '../../High_Order/Fade';
import Loading from '../../Animation/Loading';

import { setID } from '../../../actions/notes-data';

class Card extends React.Component {
  state = {
    side: false
  }

  edit = () => {
    const { id } = this.props.note;
    
    this.props.history.push(`/Notes/Edit/${id}`);
  }

  view = () => {
    const { id } = this.props.note;
    const { setID } = this.props;
    
    setID(id);
  }

  render() {
    const { note, noteIsLoading, idToLoad } = this.props;
    const { title, description, favorite, id } = note;

    return (
      <div className="notes-main-card">
        <div className="Notes-Card-Title">
          {truncate(title, { 'length': 15 })}
          { favorite && <i className="fas fa-star Favorite" /> }
        </div>

        <textarea 
          className="description"
          value={description}
          readOnly
          disabled
        />

        <div className="footer">
          {
            noteIsLoading && (idToLoad === id) && 
            <Loading 
              position={{
                position: "absolute", 
                fontSize: "0.9 rem",
                left: 0
              }}

              icon={" font-size-1_2-rem"}
            />
          }

          <button className="icon edit" onClick={this.edit}> <i className="fas fa-edit" /> </button>
          <button className="icon" onClick={this.view}> <i className="fas fa-eye" /> </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  note: object.isRequired,
  setID: func.isRequired,
  noteIsLoading: bool.isRequired,
  idToLoad: string.isRequired
}

export default withRouter(connect(
  (state) => ({   
    noteIsLoading: state.view.noteIsLoading,
    idToLoad: state.notesData.idToLoad
  }), 
  { setID }
)(Fade(Card)));