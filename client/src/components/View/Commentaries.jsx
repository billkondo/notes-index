import React from 'react';
import classNames from 'classnames';
import { number } from 'prop-types';

import { Input } from 'reactstrap';

import { commentsArray } from '../../propTypes/propTypes';

const Commentaries = ({ commentaries, flag }) => (
  <div className="commentaries">
    <i className="fas fa-book-open book" />

    <div className="container-commentaries">
      {commentaries.map(value => (
        <Input
          type="textarea"
          key={value.id}
          value={value.comment}
          readOnly
          disabled
          className={classNames(
            'comment',
            { CollectionPageSmall: flag === 0 },
            { NotePageSmall: flag === 1 }
          )}
          rows="3"
        />
      ))}
    </div>
  </div>
);

Commentaries.propTypes = {
  commentaries: commentsArray.isRequired,
  flag: number.isRequired
};

export default Commentaries;
