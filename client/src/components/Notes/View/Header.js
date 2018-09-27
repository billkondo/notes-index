import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

const Header= (props) => {
  const { title } = props;

  const click = () => props.history.push('/Notes');

  return (
    <div id="header-view">
      <div id="title-box">
        <div id="title-icon"><i className="fas fa-quote-left" /></div>
        <div id="title"> {title} </div>
      </div>
      <ExitButton  click={click} />
    </div>
  );
}

Header.propTypes = {
  title: propTypes.string
}

export default withRouter(connect(
  (state) => ({
    title: state.notesOperations.title
  })
)(Header));