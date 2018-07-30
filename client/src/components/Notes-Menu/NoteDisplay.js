import React from 'react';

class NoteDisplay extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="note-display">
        <div className="note-display-header"> 
          <div className="note-display-title"> {this.props.note.title} </div>
          <div className="controls">
            <div className="edit"> <i className="fas fa-edit" /> </div>
            <div className="view"> <i className="fas fa-eye" /> </div>
          </div>
        </div>

        <div className="description">
          {this.props.note.description}
        </div>
      </div>
    );
  }
}

export default NoteDisplay;