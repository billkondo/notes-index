import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

import CustomEditor from '../../Editor/CustomEditor';
import ExitButton from '../../Buttons/ExitButton';

class Commentary extends React.Component {
  static propTypes = {
    contentState: propTypes.string.isRequired,
    id: propTypes.string.isRequired
  }

  state = {
    focus: false,
    doubleClick: false
  }

  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  click = () => {
    if (this.state.doubleClick) return;
    this.setState({ doubleClick: true });
    this.props.deleteComment(this.props.id);
  }

  saveFunction = (newComment) => {
    this.props.writeComment(newComment, this.props.id);
    this.onBlur();
  }

  render() {
    return (
      <div 
        className={classnames("commentary-note", {"commentary-onFocus-border": this.state.focus})} 
        onFocus={this.onFocus} 
        ref={node => this.node = node} 
      >
        <CustomEditor contentState={this.props.contentState} saveFunction={this.saveFunction} />
        
        {
          this.state.focus &&
          <ExitButton click={this.click} />
        }
      </div>
    );
  }
}

export default Commentary;