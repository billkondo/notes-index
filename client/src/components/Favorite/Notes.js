import React from 'react';

import Fade from '../High_Order/Fade';
import CardNote from '../Notes/Main/Card';

const Notes = ({ notes }) => (
  <React.Fragment>
    {
      notes.map(value => <CardNote key={value.id} note={value} /> )
    }
  </React.Fragment>
);

export default Fade(Notes);