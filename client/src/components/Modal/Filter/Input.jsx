import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import classNames from 'classnames';
import { bool } from 'prop-types';

import AddButton from '../../Buttons/AddButton';

const InputTag = () =>
  class InputTag extends React.Component {
    render() {
      return <div />;
      // const { filterMode } = this.props;
      // <div className="InputTag">
      //   <div className="Title">
      //     <i className="fas fa-hashtag TagIcon" />
      //     <span> TAG </span>
      //   </div>
      //   <Input
      //     value={tag}
      //     onChange={this.onChange}
      //     className={classNames(
      //       'Input',
      //       { NotePageSmall: !filterMode },
      //       { CollectionPageSmall: filterMode }
      //     )}
      //     onKeyDown={this.onKeyDown}
      //   />
      //   <AddButton click={this.addTag} />
      // </div>;
    }
  };

InputTag.propTypes = {
  filterMode: bool.isRequired
};

export default connect(state => ({
  filterMode: state.filter.filterMode
}))(InputTag);
