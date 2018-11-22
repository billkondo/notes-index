import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { bool, func, string } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Header from '../../View/Header';
import Description from '../../View/Description';
import Children from '../../View/Children';
import Tags from '../../View/Tags';
import Controls from '../../View/Controls';

import { setID } from '../../../actions/collections-data';

import { collectionObject, tagsArray, notesArray } from '../../../propTypes/propTypes';

const FrontView = ({ sideToView, description, notes }) => (
  <CSSTransition
    in={sideToView}
    timeout={{
      enter: 500,
      exit: 0
    }}
    classNames={{
      enter: 'animated',
      enterActive: 'fadeIn faster'
    }}
    mountOnEnter
    unmountOnExit
  >
    <div>
      <Description flag={0} description={description} />
      <Children notes={notes} />
    </div>
  </CSSTransition>
);

FrontView.propTypes = {
  sideToView: bool.isRequired,
  description: string.isRequired,
  notes: notesArray.isRequired
};

const BackView = ({ sideToView, tags }) => (
  <CSSTransition
    in={sideToView}
    timeout={{
      enter: 500,
      exit: 0
    }}
    classNames={{
      enter: 'animated',
      enterActive: 'fadeIn faster'
    }}
    mountOnEnter
    unmountOnExit
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
    const { collection } = this.props;
    const { title, description, tags, children, favorite } = collection;

    return (
      <div className="ViewPage">
        <div className="BigCard CollectionPageLarge">
          <ExitButton click={this.exit} styles={{ borderRadius: 0 }} />
          <Header title={title} favorite={favorite} />
          <FrontView sideToView={!sideToView} description={description} notes={children} />
          <BackView sideToView={sideToView} tags={tags} />
          <Controls sideToView={sideToView} flipView={this.flipView} />
        </div>
      </div>
    );
  }
}

ViewUI.propTypes = {
  collection: collectionObject.isRequired,
  setIDConnect: func.isRequired
};

export default connect(
  state => ({
    collection: state.collectionsOperations
  }),
  { setIDConnect: setID }
)(ViewUI);
