import React from 'react';
import propTypes from 'prop-types';

import CustomEditor from '../../Editor/CustomEditor';
import ExitButton from '../../Buttons/ExitButton';

class Commentary extends React.Component {
  static propTypes = {
    contentState: propTypes.string.isRequired,
    index: propTypes.number.isRequired
  }

  state = {
    focus: false,
  }

  onFocus = () => this.setState({ focus: true });

  onBlur = () => this.setState({ focus: false }); 

  click = () => {
    this.props.deleteComment(this.props.index);
    this.setState({ focus: false });
  }

  saveFunction = (newComment) => {
    this.props.writeComment(newComment, this.props.index);
    this.onBlur();
  } 

  render() {
    return (
      <div className="commentary-create" onFocus={this.onFocus} ref={node => this.node = node} >
        <CustomEditor contentState={this.props.contentState}  saveFunction={this.saveFunction} />

        {
          this.state.focus &&
          <ExitButton click={this.click} />
        }

      </div>
    );
  }
}

export default Commentary;