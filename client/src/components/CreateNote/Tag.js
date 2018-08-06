import React from 'react';
import { connect } from 'react-redux';

// Components
import ExitButton from '../Buttons/ExitButton';

/*

  Function: Render a tag
  Props:
    - tag
    - delete(): a function to delete the tag 

*/

class Tag extends React.Component {
  state = {
    mouseOn: false
  }

  mouseEnter = () => this.setState({ mouseOn: true });
  mouseLeave = () => this.setState({ mouseOn: false });

  render() {
    return (
      <div className="tag" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {this.props.tag}

        {
          this.state.mouseOn && 
          <ExitButton click={this.props.delete}/>
        }
      </div>
    );
  }
}

export default Tag;