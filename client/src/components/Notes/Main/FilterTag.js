import React from 'react';
import propTypes from 'prop-types';
import ExitButton from '../../Buttons/ExitButton';

class FilterTag extends React.Component {
  state = {
    mouseOver: false
  }

  onMouseEnter = () => this.setState({ mouseOver: true })
  onMouseLeave = () => this.setState({ mouseOver: false })
  
  onMouseOver = () => {
    if (!this.state.mouseOver) 
      this.setState({ mouseOver: true })
  }

  click = () => {
    this.props.deleteTag(this.props.tag)
  }

  render() {
    return (
      <div 
        className="tag-filter"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
        {
          this.state.mouseOver && 
          <ExitButton click={this.click} />
        }
        <p> {this.props.tag} </p>
      </div>
    );
  }
}

FilterTag.propTypes = {
  tag: propTypes.string.isRequired,
  deleteTag: propTypes.func.isRequired
}

export default FilterTag;