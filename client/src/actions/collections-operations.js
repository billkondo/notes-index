import uuidv4 from 'uuid/v4';
import axios from 'axios';

import {
  WRITE_TITLE,
  ADD_TAG,
  WRITE_TAG,
  WRITE_DESCRIPTION,
  ADD_CHILDREN,
  REMOVE_CHILDREN,
  RESET_COLLECTION,
  DELETE_TAG,
  FAVORITE_FLIP,
  LOAD_COLLECTION
} from '../types/collections-operations';

export const writeTitle = title => dispatch => {
  dispatch({
    type: WRITE_TITLE,
    title
  });
};

export const addTag = tag => dispatch => {
  dispatch({
    type: ADD_TAG,
    tag
  });
};

export const writeTag = tag => dispatch => {
  dispatch({
    type: WRITE_TAG,
    tag
  });
};

export const deleteTag = tag => dispatch => {
  dispatch({
    type: DELETE_TAG,
    tag
  });
};

export const writeDescription = description => dispatch => {
  dispatch({
    type: WRITE_DESCRIPTION,
    description
  });
};

export const addChildren = note => dispatch => {
  dispatch({
    type: ADD_CHILDREN,
    note
  });
};

export const removeChildren = note => dispatch => {
  dispatch({
    type: REMOVE_CHILDREN,
    note
  });
};

export const resetCollection = () => dispatch => {
  dispatch({
    type: RESET_COLLECTION
  });
};

export const favoriteFlip = () => dispatch => {
  dispatch({ type: FAVORITE_FLIP });
};

export const submitCollection = updateURL => (dispatch, getState) => {
  const collection = getState().collectionsOperations;

  const children = collection.children.map(child => {
    const { _id } = child;
    return _id;
  });

  const { title, description, tags, favorite } = collection;

  const newCollection = {
    title,
    description,
    tags,
    children,
    favorite,
    id: uuidv4()
  };

  axios.post('/api/collections', newCollection).then(() => {
    // TODO Handle Errors
    updateURL();
  });
};

export const submitEditedCollection = updateURL => (dispatch, getState) => {
  const collection = getState().collectionsOperations;

  const children = collection.children.map(child => {
    const { _id } = child;
    return _id;
  });

  const { title, description, tags, favorite, id } = collection;

  const newCollection = {
    title,
    description,
    tags,
    children,
    favorite,
    id
  };

  axios.put('/api/collections', newCollection).then(() => {
    // TODO Handle Errors
    updateURL();
  });
};

export const deleteCollection = updateURL => (dispatch, getState) => {
  const collection = getState().collectionsOperations;

  axios
    .delete('/api/collections', { params: collection })
    .then(() => {
      // TODO Error handling
      updateURL();
    })
    .catch(err => console.log(err));
};

export const loadCollection = collection => dispatch => {
  dispatch({
    type: LOAD_COLLECTION,
    title: collection.title,
    description: collection.description,
    tags: collection.tags,
    children: collection.children,
    id: collection.id,
    favorite: collection.favorite
  });
};
