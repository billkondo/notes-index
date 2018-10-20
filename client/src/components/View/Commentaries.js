import React from 'react';
import classNames from 'classnames';
import { array, number } from 'prop-types';

import { Input } from 'reactstrap';

class Commentaries extends React.Component {
  render() {
    const { commentaries, flag } = this.props;

    return (
      <div className="commentaries">
        <i className="fas fa-book-open book" />

        <div className="container-commentaries">
          {
            commentaries.map(value => 
              <Input 
                type="textarea"
                key={value.id} 
                value={value.comment}
                readOnly
                disabled  
                className={
                  classNames(
                    "comment",
                    { "CollectionPageSmall": flag === 0}, 
                    { "NotePageSmall": flag === 1}
                )}
                rows="3"
              />
            )
          }
        </div>
      </div>
    );
  }
}

Commentaries.propTypes = {
  commentaries: array.isRequired,
  flag: number.isRequired
}

export default Commentaries;