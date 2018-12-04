import React from 'react';
import { connect } from 'react-redux';

import { func, bool } from 'prop-types';
import { matchObject, noteObject } from '../../../propTypes/propTypes';

import ViewComponent from './ViewComponent';
import Loading from '../../Animation/Loading';

import { notesViewOperations as operations } from './duck';

class ViewContainer extends React.Component {
  componentWillMount() {
    const { fetchNote, match } = this.props;
    const { id } = match.params;

    fetchNote(id);
  }

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  render() {
    const { note, isFetching } = this.props;

    return (
      <React.Fragment>
        {isFetching && <Loading />}
        {!isFetching && <ViewComponent note={note} />}
      </React.Fragment>
    );
  }
}

ViewContainer.propTypes = {
  reset: func.isRequired,
  fetchNote: func.isRequired,
  match: matchObject.isRequired,
  note: noteObject.isRequired,
  isFetching: bool.isRequired
};

export default connect(
  state => ({
    note: state.notesView.note,
    isFetching: state.notesView.isFetching
  }),
  {
    reset: operations.reset,
    fetchNote: operations.fetchNote
  }
)(ViewContainer);
