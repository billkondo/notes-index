import React from 'react';
import { connect } from 'react-redux';
import { Editor, RichUtils, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Header from './HeaderFromDescription';
import CustomEditor from '../../Editor/CustomEditor';
import classnames from 'classnames';

import { writeDescription } from '../../../actions/notes-operations';

class DescriptionUI extends React.Component {
  state = {
    isBold: false,
    isItalic: false,
    isFocused: false
  }

  // onBoldClick = (e) => {
  //   if (!this.state.isFocused)
  //     return;

  //   e.preventDefault();
  //   this.setState((prevState) => ({ isBold: !prevState.isBold }));
  //   this.onChange(RichUtils.toggleInlineStyle(this.props.description, 'BOLD'));
  // }

  // onItalicClick = (e) => {
  //   if (!this.state.isFocused)
  //     return;

  //   e.preventDefault();
  //   this.setState((prevState) => ({ isItalic: !prevState.isItalic }));
  //   this.onChange(RichUtils.toggleInlineStyle(this.props.description, 'ITALIC'));
  // }

  onFocus = () => this.setState({ isFocused: true });
  onBlur = () => this.setState({ isFocused: false })

  render() {
    return (
      <div className="description-note">
        <Header
          onBoldClick={this.onBoldClick}
          onItalicClick={this.onItalicClick}
          isBold={this.state.isBold}
          isItalic={this.state.isItalic}
        />

        <div 
          className={classnames("description", {"description-onFocus-border": this.state.isFocused})} 
          onFocus={this.onFocus} 
          onBlur={this.onBlur} 
        >
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