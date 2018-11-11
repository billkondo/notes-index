import React from 'react';

import CardCollection from '../Collections/Main/Card';

const Collections = ({ collections }) => (
  <React.Fragment>
    {collections.map(value => (
      <CardCollection key={value.id} collection={value} />
    ))}
  </React.Fragment>
);

export default Collections;
