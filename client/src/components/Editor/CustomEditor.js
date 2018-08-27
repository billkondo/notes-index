import React from 'react';
import propTypes from 'prop-types';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

export const stringifyContent = (contentState) => JSON.stringify(convertToRaw(contentState));
export const parseContent = (editorContent) => convertFromRaw(JSON.parse(editorContent));

const newEditorState = (contentState) => EditorState.createWithContent(parseContent(contentState))

class CustomEditor extends React.Component {
  static propTypes = {
    contentState: propTypes.string.isRequired,
    saveFunction: propTypes.func.isRequired,
    doubleClick: propTypes.bool
  }

  state = {
    editorState: EditorState.createEmpty()
  }

  onBlur = () => this.props.saveFunction(stringifyContent(this.state.editorState.getCurrentContent()))
  onClick = () => this.editor.focus();
  

  onChange = (editorState) => this.setState({ editorState });

  componentDidMount() {
    this.setState({ editorState: newEditorState(this.props.contentState) });
  }

  componentWillReceiveProps(nextProps) {
    if (stringifyContent(this.state.editorState.getCurrentContent()) !== nextProps.contentState)
      this.setState({ editorState: newEditorState(nextProps.contentState) });
  }

  render() {
    return (
      <div className="custom-editor" onBlur={this.onBlur} onClick={this.onClick}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} ref={editor => this.editor = editor} />
      </div>
    );
  }
}

export default CustomEditor;