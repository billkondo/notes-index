import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Collapse, Input } from 'reactstrap';
import { func, bool, number } from 'prop-types';

import Loading from '../Animation/Loading';

import { setID } from '../../actions/notes-data';

import { childrenArray, noteObject } from '../../propTypes/propTypes';

const Child = ({ child, index, isOpen, idSelect, loadID, noteIsLoading }) => (
  <div
    role="button"
    className={classNames('Card', { black: !index }, { gray: index })}
    onClick={e => {
      if (e.target.id !== 'VIEW') idSelect(child.id);
    }}
    onKeyPress={e => {
      if (e.key === 'ENTER') idSelect(child.id);
    }}
    tabIndex={0}
  >
    <div className="CardTitle">
      {child.title}
      {child.favorite && <i className="fas fa-star favorite" />}
      {isOpen && (
        <button className="view reset" type="button" onClick={() => loadID(child.id)}>
          <i id="VIEW" className="fas fa-eye" />
        </button>
      )}

      {noteIsLoading && isOpen && (
        <Loading
          positionStyle={{
            position: 'absolute',
            right: 0,
            marginRight: '5.5rem',
            alignSelf: 'center'
          }}
          iconStyle="font-size-1_2-rem"
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
              {value}
            </div>
          ))}
        </div>
      </div>
    </Collapse>
  </div>
);

Child.propTypes = {
  child: noteObject.isRequired,
  index: number.isRequired,
  isOpen: bool.isRequired,
  noteIsLoading: bool.isRequired,
  idSelect: func.isRequired,
  loadID: func.isRequired
};

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
    const { setIDConnect } = this.props;

    setIDConnect(id);
  };

  render() {
    const { notes, noteIsLoading } = this.props;
    const { openID } = this.state;

    return (
      <div className="children">
        <i className="fas fa-folder-open folder" />
        <div className="notes">
          {notes.map((value, index) => (
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
  notes: childrenArray.isRequired,
  setIDConnect: func.isRequired,
  noteIsLoading: bool.isRequired
};

export default connect(
  state => ({
    noteIsLoading: state.view.noteIsLoading
  }),
  { setIDConnect: setID }
)(Children);
