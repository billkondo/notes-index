import React from 'react';
import propTypes from 'prop-types';
import ExitButton from '../../Buttons/ExitButton';

class Tag extends React.Component {
  static propTypes = {
    tag: propTypes.string.isRequired,
    deleteTag: propTypes.func.isRequired
  }

  state = {
    mouseOver: false,
    doubleClick: false
  }

  onMouseOver = () => {
    if (!this.state.mouseOver) {
      this.setState({ mouseOver: true })
    }
  }

  onMouseEnter = () => this.setState({ mouseOver: true });
  onMouseLeave = () => this.setState({ mouseOver: false });

  click = () => {
    if (this.state.doubleClick) return;
    this.setState({ doubleClick: true });
    this.props.deleteTag();
  }

  render() {
    return (
      <div className="tag-note" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}>
        {this.props.tag}

        {
          this.state.mouseOver &&
          <ExitButton click={this.click} />
        }
      </div>
    );
  }
}

export default Tag;