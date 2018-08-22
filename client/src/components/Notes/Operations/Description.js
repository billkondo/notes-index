import React from 'react';
import { connect } from 'react-redux';
import { Editor, RichUtils, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Header from './HeaderFromDescription';
import CustomEditor from '../../Editor/CustomEditor';

import { writeDescription } from '../../../actions/notes-operations';

const Separator = () => (
  <div className="separator">
  </div>
);

class DescriptionUI extends React.Component {
  state = {
    isBold: false,
    isItalic: false,
    editorFocus: false
  }

  // onBoldClick = (e) => {
  //   if (!this.state.editorFocus)
  //     return;

  //   e.preventDefault();
  //   this.setState((prevState) => ({ isBold: !prevState.isBold }));
  //   this.onChange(RichUtils.toggleInlineStyle(this.props.description, 'BOLD'));
  // }

  // onItalicClick = (e) => {
  //   if (!this.state.editorFocus)
  //     return;

  //   e.preventDefault();
  //   this.setState((prevState) => ({ isItalic: !prevState.isItalic }));
  //   this.onChange(RichUtils.toggleInlineStyle(this.props.description, 'ITALIC'));
  // }

  onFocus = () => this.setState({ editorFocus: true });
  onBlur = () => this.setState({ editorFocus: false })

  render() {
    return (
      <div id="description-note">
        <Header
          onBoldClick={this.onBoldClick}
          onItalicClick={this.onItalicClick}
          isBold={this.state.isBold}
          isItalic={this.state.isItalic}
        />

        <div className="description">
          <CustomEditor contentState={this.props.description} saveFunction={this.props.writeDescription}/>
        </div>
      </div>
    );
  }
}

const Description = connect(
  (state) => ({
    description: state.notesOperations.description
  }),
  (dispatch) => ({
    writeDescription: (newDescription) => dispatch(writeDescription(newDescription))
  })
)(DescriptionUI);

export default Description;