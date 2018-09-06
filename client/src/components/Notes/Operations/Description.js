import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Header from './HeaderFromDescription';
import CustomEditor from '../../Editor/CustomEditor';
import classnames from 'classnames';

import { writeDescription } from '../../../actions/notes-operations';

class Description extends React.Component {
  state = {
    isFocused: false
  }

  onFocus = () => this.setState({ isFocused: true });
  onBlur = () => this.setState({ isFocused: false })

  render() {
    const { isFocused } = this.state;
    const { description, writeDescription } = this.props;

    return (
      <div className="notes-utils-description">
        <Header />

        <div 
          className={classnames("description", {"description-onFocus-border": isFocused})} 
          onFocus={this.onFocus} 
          onBlur={this.onBlur} 
        >
          <CustomEditor contentState={description} saveFunction={writeDescription} />
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  description: propTypes.string.isRequired, 
  writeDescription: propTypes.func.isRequired
}

export default connect(
  (state) => ({
    description: state.notesOperations.description
  }),
  (dispatch) => ({
    writeDescription: (newDescription) => dispatch(writeDescription(newDescription))
  })
)(Description);