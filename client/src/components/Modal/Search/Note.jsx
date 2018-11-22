import React from 'react';
import classNames from 'classnames';
import { Collapse, Card, CardBody } from 'reactstrap';
import { number, func, bool } from 'prop-types';

import { noteObject } from '../../../propTypes/propTypes';

const Note = ({ note, index, isOpen, setId }) => {
  const { title, description, tags, favorite } = note;

  return (
    <button
      type="button"
      className={classNames('search-note', { black: index === 0 }, { gray: index === 1 })}
      onClick={() => setId(note)}
    >
      <div className="title_note">
        {title}
        {favorite && <i className="fas fa-star favorite-icon-note" />}
      </div>

      <Collapse isOpen={isOpen}>
        <Card className="info">
          <CardBody className="info-body">
            <div className="description">{description}</div>

            <div className="tags">
              {tags.map(tag => (
                <div key={tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </button>
  );
};

Note.propTypes = {
  note: noteObject.isRequired,
  index: number.isRequired,
  isOpen: bool.isRequired,
  setId: func.isRequired
};

export default Note;
