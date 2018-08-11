import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Header from './HeaderFromDescription';

import { writeDescription } from '../../../actions/create-note';

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

  onChange = (newDescription) => this.props.writeDescription(newDescription);

  onBoldClick = (e) => {
    if (!this.state.editorFocus)
      return;

    e.preventDefault();
    this.setState((prevState) => ({ isBold: !prevState.isBold }));
    this.onChange(RichUtils.toggleInlineStyle(this.props.description, 'BOLD'));
  }

  onItalicClick = (e) => {
    if (!this.state.editorFocus)
      return;

    e.preventDefault();
    this.setState((prevState) => ({ isItalic: !prevState.isItalic }));
    this.onChange(RichUtils.toggleInlineStyle(this.props.description, 'ITALIC'));
  }

  onFocus = () => this.setState({ editorFocus: true });
  onBlur = () => this.setState({ editorFocus: false })

  render() {
    return (
      <div id="note-description">
        <Header
          onBoldClick={this.onBoldClick}
          onItalicClick={this.onItalicClick}
          isBold={this.state.isBold}
          isItalic={this.state.isItalic}
        />

        <div className="description" onFocus={this.onFocus} onBlur={this.onBlur} >
          <Editor editorState={this.props.description} onChange={this.onChange} />
        </div>

        <Separator />
      </div>
    );
  }
}

const Description = connect(
  (state) => ({
    description: state.createNote.description
  }),
  (dispatch) => ({
    writeDescription: (newDescription) => dispatch(writeDescription(newDescription))
  })
)(DescriptionUI);

export default Description;