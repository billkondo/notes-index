import React from 'react';

import CardCollection from '../Collections/Main/Card';

import { collectionsArray } from '../../propTypes/propTypes';

const Collections = ({ collections }) => (
  <React.Fragment>
    {collections.map(value => (
      <CardCollection key={value.id} collection={value} />
    ))}
  </React.Fragment>
);

Collections.propTypes = {
  collections: collectionsArray.isRequired
};

export default Collections;
