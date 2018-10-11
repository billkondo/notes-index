import React from 'react';
import { func, object } from 'prop-types';

import truncate from 'lodash/truncate';

class NoteCard extends React.Component {
  state = {
    side: false
  }

  flipSide = () => this.setState(prev => ({ side: !prev.side }));

  render() {
    const { note, transition } = this.props;
    const { side } = this.state;
    const { title, description, tags, id } = note;

    return (
      <div className="note-card" onClick={this.flipSide} >
        <div className="note-display-header">
          <div className="note-display-title"> {truncate(title, { 'length': 15 })} </div>
          <div className="controls">
            <div className="edit" onClick={() => transition(`/Notes/Edit/${id}`)} > <i className="fas fa-edit" /> </div>
            <div className="view" onClick={() => transition(`/Notes/View/${id}`)} > <i className="fas fa-eye" /> </div>
          </div>
        </div>

        {
          !side && 
          <div className="description">
            {description}
          </div>
        }
        {
          side && 
          <div className="tags">
            {
              tags.map(tag => <div key={tag} className="tag"> {tag} </div>)
            }
          </div>
        }
      </div>
    );
  }
}

NoteCard.propTypes = {
  note: object.isRequired,
  transition: func.isRequired
}

export default NoteCard;