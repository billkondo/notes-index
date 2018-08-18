import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, convertToRaw } from 'draft-js';

import { parseContent, stringifyContent } from '../../Editor/EditorCustom';
import ExitButton from '../../Buttons/ExitButton';

import { writeComment } from '../../../actions/notes-operations';

class CommentaryUI extends React.Component {
  static propTypes = {
    commentContentState: propTypes.string.isRequired,
    index: propTypes.number.isRequired
  }

  state = {
    focus: false,
    editorState: EditorState.createEmpty()
  }

  onFocus = () => this.setState({ focus: true });

  onBlur = () => {
    this.setState({ focus: false });
    const newString = stringifyContent(this.state.editorState.getCurrentContent());
    this.props.writeComment(newString, this.props.index);
  }

  click = () => {
    this.props.deleteComment(this.props.index);
    this.setState({ focus: false });
  }

  outsideClick = (e) => {
    if (!this.node.contains(e.target))
      this.onBlur();
  }

  onChange = (editorState) => this.setState({ editorState });

  componentWillMount() {
    document.addEventListener('mousedown', this.outsideClick, false);
  }

  componentDidMount() {
    this.setState({ editorState: EditorState.createWithContent(parseContent(this.props.commentContentState)) });
  }

  componentWillReceiveProps(nextProps) {
    if (stringifyContent(this.state.editorState.getCurrentContent()) !== nextProps.commentContentState)
      this.setState({ editorState: EditorState.createWithContent(parseContent(nextProps.commentContentState)) });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.outsideClick, false);
  }

  render() {
    return (
      <div className="commentary-create" onFocus={this.onFocus} ref={node => this.node = node}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />

        {
          this.state.focus &&
          <ExitButton click={this.click} />
        }

      </div>
    );
  }
}


const Commentary = connect(
  (state) => ({}),
  (dispatch) => ({
    writeComment: (newComment, id) => dispatch(writeComment(newComment, id))
  })
)(CommentaryUI);

export default Commentary;