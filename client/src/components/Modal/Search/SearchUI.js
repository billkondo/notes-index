import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ButtonGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import Notes from './Notes';
import ExitButton from '../../Buttons/ExitButton';

import { addChildren } from '../../../actions/collections-operations';
import { removeNote } from '../../../actions/notes-data';

class SearchUI extends React.Component {
  state = {
    option: 0,
    noteToSubmit: {},
    idToSubmit: ""
  }

  filpSearch = (value) => this.setState({ option: value });

  setId = (note) => {
    const { idToSubmit } = this.state;
    if (idToSubmit === note.id) this.setState({ noteToSubmit: {}, idToSubmit: "" });
    else this.setState({ noteToSubmit: note, idToSubmit: note.id });
  }

  onSubmit = () => {
    const { addChildren, exitSearchMenu, removeNote } = this.props;
    const { noteToSubmit } = this.state;
    
    addChildren(noteToSubmit);
    removeNote(noteToSubmit);
    exitSearchMenu();

    this.setState({
      option: 0,
      noteToSubmit: {},
      idToSubmit: ""
    })
  }
  
  render() {
    const { shouldRender, exitSearchMenu } = this.props;
    const { option, idToSubmit } = this.state;

    return (
      <CSSTransition
        in={shouldRender}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={{
          enter: 800,
          exit: 500
        }}
        classNames={{
          enter: "animated", 
          exit: "animated", 
          enterActive: "fadeIn fast",
          exitActive: "fadeOut faster"
        }}
      >
        <div className="modal-search-page">
          <div className="container">
            <div className="search-menu">
              <div className="header"> 
                Search Menu 
                <ExitButton click={exitSearchMenu} />
                <div className="buttons">
                  <ButtonGroup className="first-group">
                    <Button color="primary" active={option == 0} onClick={() => this.filpSearch(0)} >Notes</Button>
                    <Button color="primary" active={option == 1} onClick={() => this.filpSearch(1)} >Collections</Button>
                  </ButtonGroup>
                  <Button className="second-group" color="success">Filter by Tags</Button>
                </div>
              </div>

              <div className="sort">

              </div>

              {(option == 0) && <Notes id={idToSubmit} setId={this.setId} /> }

              <Button 
                color="success" 
                disabled={!idToSubmit} 
                className="submit"
                onClick={this.onSubmit}
              > 
                Submit 
              </Button>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

SearchUI.propTypes = {
  shouldRender: bool.isRequired, 
  exitSearchMenu: func.isRequired,
  addChildren: func.isRequired,
  removeNote: func.isRequired
}

export default connect(
  null, 
  { addChildren, removeNote }
)(SearchUI);