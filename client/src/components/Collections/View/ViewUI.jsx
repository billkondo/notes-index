import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { object, func } from 'prop-types';

import ExitButton from '../../Buttons/ExitButton';
import Header from '../../View/Header';
import Description from '../../View/Description';
import Children from '../../View/Children';
import Tags from '../../View/Tags';
import Controls from '../../View/Controls';

import { setID } from '../../../actions/collections-data';

const FrontView = ({ sideToView, description, children }) => (
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
      <Children children={children} />
    </div>
  </CSSTransition>
);

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

class ViewUI extends React.Component {
  state = {
    sideToView: false
  };

  flipView = () =>
    this.setState(prevState => ({
      sideToView: !prevState.sideToView
    }));

  exit = () => {
    const { setID } = this.props;
    setID('');
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
          <FrontView sideToView={!sideToView} description={description} children={children} />
          <BackView sideToView={sideToView} tags={tags} />
          <Controls sideToView={sideToView} flipView={this.flipView} />
        </div>
      </div>
    );
  }
}

ViewUI.propTypes = {
  collection: object.isRequired,
  setID: func.isRequired
};

export default connect(
  state => ({
    collection: state.collectionsOperations
  }),
  { setID }
)(ViewUI);
