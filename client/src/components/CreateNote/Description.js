import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { enterNewDescription } from '../../actions/create-note';

class Header extends React.Component {
  getStyle = (flag) => {
    console.log(flag);
    if (!flag)
      return {}

    return {
      background: "#353839",
      color: "white"
    }
  }

  render() {
    return (<div className="header-description">
      <div className="title"> Description </div>
      <div className="button-container">
        <i className="fas fa-bold button" onMouseDown={this.props.onBoldClick} style={this.getStyle(this.props.isBold)} />
        <i className="fas fa-italic button" onMouseDown={this.props.onItalicClick} style={this.getStyle(this.props.isItalic)} />
      </div>
    </div>
    );
  }
}

const Separator = () => (
  <div className="separator">
  </div>
);

class DescriptionUI extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
    isBold: false,
    isItalic: false,
    editorFocus: false
  }

  onChange = (editorState) => this.setState({ editorState });

  onBoldClick = (e) => {
    if (!this.state.editorFocus)
      return;

    e.preventDefault();
    this.setState((prevState) => ({ isBold: !prevState.isBold }));
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onItalicClick = (e) => {
    if (!this.state.editorFocus)
      return;
    
      e.preventDefault();
    this.setState((prevState) => ({ isItalic: !prevState.isItalic }));
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
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

        <div className="description" ref={editor => this.editor = editor} onFocus={this.onFocus} onBlur={this.onBlur} >
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>

        <Separator />
      </div>
    );
  }
}

const Description = connect(
  (state) => ({}),
  (dispatch) => ({
    enterDescription: (newDescription) => dispatch(enterNewDescription(newDescription))
  })
)(DescriptionUI);

export default Description;