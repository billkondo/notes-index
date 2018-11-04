import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import truncate from 'lodash/truncate';
import { object, func } from 'prop-types';

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
    const { note } = this.props;
    const { title, description, favorite } = note;

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
          <button className="icon edit" onClick={this.edit}> <i className="fas fa-edit" /> </button>
          <button className="icon" onClick={this.view}> <i className="fas fa-eye" /> </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  note: object.isRequired,
  setID: func.isRequired
}

export default withRouter(connect(
  null, 
  { setID }
)(Card));