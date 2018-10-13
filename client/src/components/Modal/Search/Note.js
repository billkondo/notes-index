import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Collapse, Card, CardBody } from 'reactstrap';

import Favorite from '../../Buttons/FavoriteButton';

class Note extends React.Component {  
  render() {
    const { note, index, isOpen, setId } = this.props;
    const { title, description, tags, favorite, id } = note;

    return (
      <button
        className={classNames("search-note", {"black" : index == 0}, {"gray": index == 1} )}
        onClick={() => setId({ title, description, tags, id })}
      >
        <div className="title">
          { title }
          { favorite && <Favorite on={true} /> }
        </div>


        <Collapse isOpen={isOpen}>
          <Card className="info">
            <CardBody className="info-body">
              <div className="description">
                { description }
              </div>

              <div className="tags">
                { 
                  tags.map(tag => <div key={tag} className="tag"> { tag } </div>)
                }
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </button>
    );
  }
}

Note.propTypes = {
  note: propTypes.object.isRequired,
  index: propTypes.number.isRequired,
  isOpen: propTypes.bool.isRequired,
  setId: propTypes.func.isRequired
}

export default Note;