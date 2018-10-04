import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Collapse, Card, CardBody } from 'reactstrap';

class Note extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  
  render() {
    const { note, index } = this.props;
    const { title, description, tags } = note;
    const { isOpen } = this.state;

    return (
      <button
        className={classNames("search-note", {"black" : index == 0}, {"gray": index == 1} )}
        onClick={this.toggle}
      >
        <div className="title">
          {title}
        </div>

        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              oi
            </CardBody>
          </Card>
        </Collapse>
      </button>
    );
  }
}

Note.propTypes = {
  note: propTypes.object.isRequired,
  index: propTypes.number.isRequired
}

export default Note;