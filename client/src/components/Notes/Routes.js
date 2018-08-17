import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Create from './Create/Create';
import View from './View/View';
import Edit from './Edit/Edit';
import Menu from './Main/Menu';

import { loadNotes } from '../../actions/notes-data';

class RoutesUI extends React.Component {
  componentDidMount() {
    axios
      .get('/api/notes')
      .then(res => this.props.loadNotes(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="routes">
        {this.props.renderMenu && <Menu />}
        {this.props.renderCreate && <Create />}
        {this.props.renderEdit && <Edit />}
        {this.props.renderView && <View />}
      </div>
    );
  }
}

const Routes = connect(
  (state) => ({
    renderMenu: state.notesRoutes.renderMenu,
    renderCreate: state.notesRoutes.renderCreate,
    renderEdit: state.notesRoutes.renderEdit, 
    renderView: state.notesRoutes.renderView,
    notes: state.notesData.notes,
  }),
  (dispatch) => ({
    loadNotes: (notes) => dispatch(loadNotes(notes))
  })
)(RoutesUI)

export default Routes;