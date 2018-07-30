import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="header-title"> Create Note </div>

        <div id="exit">
          <i className="fas fa-times" />
        </div>
      </div>
    );
  }
}

export default Header;