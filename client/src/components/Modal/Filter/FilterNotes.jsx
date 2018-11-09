import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';

import { exitFilterMenu } from '../../../actions/filter';

const FilterNotes = ({ exitFilterMenuConnect }) => (
  <div className="FilterPage">
    <div className="FilterMenu NotePageLarge">
      <ExitButton click={exitFilterMenuConnect} />

      <div className="Header">Filter Notes</div>

      {/* <TransitionGroup className="Tags">
        {
          tags.map(value =>
            <CSSTransition
              timeout={500}
              exit={false}
              classNames={{
                enter: "animated",
                enterActive: "fadeIn faster"
              }}
              key={value}
            >
              <Tag tag={value} deleteTag={this.deleteTag} />
            </CSSTransition>
          )
        }
      </TransitionGroup> */}

      {/* <Button color="success" className="Submit" onClick={this.submit} > FILTER </Button> */}
    </div>
  </div>
);

FilterNotes.propTypes = {
  exitFilterMenuConnect: func.isRequired
};

export default connect(
  null,
  { exitFilterMenuConnect: exitFilterMenu }
)(FilterNotes);
