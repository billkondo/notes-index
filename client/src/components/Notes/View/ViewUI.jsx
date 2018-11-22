import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { func, bool, string } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Header from '../../View/Header';
import Description from '../../View/Description';
import Commentaries from '../../View/Commentaries';
import Tags from '../../View/Tags';
import Controls from '../../View/Controls';

import { setID } from '../../../actions/notes-data';

import { noteObject, tagsArray, commentsArray } from '../../../propTypes/propTypes';

const FrontView = ({ sideToView, description, commentaries }) => (
  <CSSTransition
    in={!sideToView}
    mountOnEnter
    unmountOnExit
    timeout={{
      enter: 500,
      exit: 0
    }}
    classNames={{
      enter: 'animated',
      enterActive: 'fadeIn faster'
    }}
  >
    <div>
      <Description flag={1} description={description} />
      <Commentaries flag={1} commentaries={commentaries} />
    </div>
  </CSSTransition>
);

FrontView.propTypes = {
  sideToView: bool.isRequired,
  description: string.isRequired,
  commentaries: commentsArray.isRequired
};

const BackView = ({ sideToView, tags }) => (
  <CSSTransition
    in={sideToView}
    mountOnEnter
    unmountOnExit
    timeout={{
      enter: 500,
      exit: 0
    }}
    classNames={{
      enter: 'animated',
      enterActive: 'fadeIn faster'
    }}
  >
    <div>
      <Tags tags={tags} />
    </div>
  </CSSTransition>
);

BackView.propTypes = {
  sideToView: bool.isRequired,
  tags: tagsArray.isRequired
};

class ViewUI extends React.Component {
  state = {
    sideToView: false
  };

  flipView = () =>
    this.setState(prevState => ({
      sideToView: !prevState.sideToView
    }));

  exit = () => {
    const { setIDConnect } = this.props;

    setIDConnect('');
  };

  render() {
    const { sideToView } = this.state;
    const { note } = this.props;
    const { title, description, commentaries, tags, favorite } = note;

    return (
      <div className="ViewPage Z-Index-30">
        <div className="BigCard Z-Index-30 NotePageLarge">
          <ExitButton click={this.exit} styles={{ borderRadius: 0 }} />
          <Header title={title} favorite={favorite} />
          <FrontView
            sideToView={sideToView}
            description={description}
            commentaries={commentaries}
          />
          <BackView sideToView={sideToView} tags={tags} />
          <Controls sideToView={sideToView} flipView={this.flipView} />
        </div>
      </div>
    );
  }
}

ViewUI.propTypes = {
  setIDConnect: func.isRequired,
  note: noteObject.isRequired
};

export default connect(
  state => ({
    note: state.notesOperations
  }),
  { setIDConnect: setID }
)(ViewUI);
