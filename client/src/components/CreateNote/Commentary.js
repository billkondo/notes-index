import React from 'react';


import ExitButton from '../Buttons/ExitButton';

class Commentary extends React.Component {
  state = {
    focus: false
  }
i
  onFocus = () => this.setState({ focus: true });
  onBlur = () => this.setState({ focus: false });

  click = () => {
    this.props.deleteComment(this.props.index);
    this.onBlur();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.outsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.outsideClick, false);
  }

  outsideClick = (e) => {
    if (!this.node.contains(e.target)) 
      this.onBlur();
  }

  render() {
    return (
      <div className="commentary" onFocus={this.onFocus} ref={node => this.node = node}>
        <textarea
          className="form-control comment"
          rows="3"
          value={this.props.comment}
          onChange={(e) => this.props.writeComment(e.target.value, this.props.index)}
        />

        {
          this.state.focus && 
          <ExitButton click={this.click} />
        }

      </div>
    );
  }
}

export default Commentary;