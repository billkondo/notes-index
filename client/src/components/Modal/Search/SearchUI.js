import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ButtonGroup, Button } from 'reactstrap';

import Notes from './Notes';
import ExitButton from '../../Buttons/ExitButton';

class SearchUI extends React.Component {
  state = {
    option: 0
  }

  filpSearch = (value) => this.setState({ option: value });
  
  render() {
    const { shouldRender, exitSearchMenu } = this.props;
    const { option } = this.state;

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

              {(option == 0) && <Notes /> }
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default SearchUI;