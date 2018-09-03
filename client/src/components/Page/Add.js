import React from 'react';
import Dropdown from './Dropdown';
import { addNote, addCollection, addFavorite } from './dropdown-actions';

class Add extends React.Component {
  state = {
    isFocused: false
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.detectOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.detectOutsideClick, false);
  }

  detectOutsideClick = (e) => {
    if (!this.node.contains(e.target))
      this.setState({ isFocused: false });
  }

  onMouseDown = () => this.setState({ isFocused: true });

  render() {
    const { isFocused } = this.state;

    return (
      <div id="page-add">
        <div  
          className="page-icons"
          onMouseDown={this.onMouseDown}
          ref={node => this.node = node}
        >
          <i className="fas fa-plus" />
          <i className="fas fa-caret-down page-down" />
        </div>

        {
          isFocused &&
          <Dropdown 
            items={[addNote, addCollection, addFavorite]}
          />
        }
      </div>
    );
  }
}

export default Add;