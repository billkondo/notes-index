import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import Notes from './Notes';
import ExitButton from '../../Buttons/ExitButton';

import { exitSearchMenu, removeNote } from '../../../actions/search-menu';
import { addChildren } from '../../../actions/collections-operations';

class SearchUI extends React.Component {
  state = {
    option: 0,
    noteToSubmit: {},
    idToSubmit: ''
  };

  filpSearch = value => this.setState({ option: value });

  setId = note => {
    const { idToSubmit } = this.state;
    if (idToSubmit === note.id) this.setState({ noteToSubmit: {}, idToSubmit: '' });
    else this.setState({ noteToSubmit: note, idToSubmit: note.id });
  };

  onSubmit = () => {
    const { addChildrenConnect, removeNoteConnect } = this.props;
    const { noteToSubmit } = this.state;

    addChildrenConnect(noteToSubmit);
    removeNoteConnect(noteToSubmit);

    this.setState({
      option: 0,
      noteToSubmit: {},
      idToSubmit: ''
    });
  };

  render() {
    const { exitSearchMenuConnect } = this.props;
    const { option, idToSubmit } = this.state;

    return (
      <div className="modal-search-page">
        <div className="container">
          <div className="search-menu">
            <div className="header">
              SEARCH MENU
              <ExitButton click={exitSearchMenuConnect} />
              <div className="buttons">
                <ButtonGroup className="first-group">
                  <Button
                    color="primary"
                    active={option === 0}
                    onClick={() => this.filpSearch(0)}
                    disabled
                  >
                    NOTES
                  </Button>
                  {/* <Button color="primary" active={option == 1} onClick={() => this.filpSearch(1)} >COLLECTIONS</Button> */}
                </ButtonGroup>
                {/* <Button className="second-group" color="success">Filter by Tags</Button> */}
              </div>
            </div>

            {option === 0 && <Notes id={idToSubmit} setId={this.setId} />}

            <Button
              color="success"
              disabled={!idToSubmit}
              className="submit"
              onClick={this.onSubmit}
            >
              ADD
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

SearchUI.propTypes = {
  exitSearchMenuConnect: func.isRequired,
  addChildrenConnect: func.isRequired,
  removeNoteConnect: func.isRequired
};

export default connect(
  null,
  {
    addChildrenConnect: addChildren,
    removeNoteConnect: removeNote,
    exitSearchMenuConnect: exitSearchMenu
  }
)(SearchUI);
