import React from 'react';
import { connect } from 'react-redux';
import TagView from './TagView';

class BackViewPresent extends React.Component {
  render() {
    return (
      <div id="back-view">
        <div id="tags-view">
          {
            this.props.tags.map((value, index) => {
              return (
                <TagView key={index} tag={value}/>
              );
            })
          }
        </div>
        <i className="fas fa-undo" id="flip-back" onClick={this.props.flipSide} />
      </div>
    );
  }
}

const BackView = connect(
  (state) => ({
    tags: state.viewNote.note.tags
  })
)(BackViewPresent);

export default BackView;