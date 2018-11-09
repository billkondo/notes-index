import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Collapse, Input } from 'reactstrap';
import { arrayOf, object, func } from 'prop-types';

import Loading from '../Animation/Loading';

import { setID } from '../../actions/notes-data';

const Child = ({ child, index, isOpen, idSelect, loadID, noteIsLoading }) => (
  <button
    className={classNames('Card', { black: !index }, { gray: index })}
    onClick={e => {
      if (e.target.id !== 'VIEW') idSelect(child.id);
    }}
  >
    <div className="CardTitle">
      {child.title}
      {child.favorite && <i className="fas fa-star favorite" />}
      {isOpen && <i id="VIEW" className="fas fa-eye view" onClick={() => loadID(child.id)} />}

      {noteIsLoading && isOpen && (
        <Loading
          position={{
            position: 'absolute',
            right: 0,
            marginRight: '5.5rem',
            alignSelf: 'center'
          }}
          icon="font-size-1_2-rem"
        />
      )}
    </div>

    <Collapse isOpen={isOpen}>
      <div className="CardInfo">
        <Input
          className="CardDescription"
          value={child.description}
          type="textarea"
          readOnly
          rows="4"
          disabled
        />

        <div className="CardTags">
          {child.tags.map(value => (
            <div key={value} className="CardTag">
              {' '}
              {value}
{' '}
            </div>
          ))}
        </div>
      </div>
    </Collapse>
  </button>
);

class Children extends React.Component {
  state = {
    openID: ''
  };

  idSelect = id => {
    const { openID } = this.state;

    if (openID === id) this.setState({ openID: '' });
    else this.setState({ openID: id });
  };

  loadID = id => {
    const { setID } = this.props;

    setID(id);
  };

  render() {
    const { children, noteIsLoading } = this.props;
    const { openID } = this.state;

    return (
      <div className="children">
        <i className="fas fa-folder-open folder" />
        <div className="notes">
          {children.map((value, index) => (
            <Child
              key={value.id}
              child={value}
              index={index % 2}
              isOpen={openID === value.id}
              idSelect={this.idSelect}
              loadID={this.loadID}
              noteIsLoading={noteIsLoading}
            />
          ))}
        </div>
      </div>
    );
  }
}

Children.propTypes = {
  children: arrayOf(object),
  setID: func.isRequired
};

export default connect(
  state => ({
    noteIsLoading: state.view.noteIsLoading
  }),
  { setID }
)(Children);
