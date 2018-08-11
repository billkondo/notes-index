import React from 'react';
import propTypes from 'prop-types';
import ExitButton from '../../Buttons/ExitButton';

class Tag extends React.Component {
  static propTypes = {
    tag: propTypes.string,
    delete: propTypes.func
  }

  state = {
    mouseOver: false
  }

  onMouseOver = () => {
    if (!this.state.mouseOver) {
      this.setState({ mouseOver: true })
    }
  }

  onMouseEnter = () => this.setState({ mouseOver: true });
  onMouseLeave = () => this.setState({ mouseOver: false });

  render() {
    return (
      <div className="tag" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}>
        {this.props.tag}

        {
          this.state.mouseOver && 
          <ExitButton click={this.props.delete}/>
        }
      </div>
    );
  }
}

export default Tag;