import React from 'react';
import { connect } from 'react-redux';

// Components
import ExitButton from '../Buttons/ExitButton';

// Functions
import { deleteTag } from '../../actions/create-note';

class TagUI extends React.Component {
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
          <ExitButton click={() => this.props.delete(this.props.index)} />
        }
      </div>
    );
  }
}

const Tag = connect(
  (state) => ({}),
  (dispatch) => ({
    delete: (index) => dispatch(deleteTag(index))
  })
)(TagUI);

export default Tag;