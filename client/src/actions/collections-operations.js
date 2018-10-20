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
  START_LOAD, 
  END_LOAD,
  LOAD_COLLECTION
} from '../types/collections-operations';

export const writeTitle = (title) => {
  return dispatch => {
    dispatch({
      type: WRITE_TITLE, 
      title
    })
  }
}

export const addTag = (tag) => {
  return dispatch => {
    dispatch({
      type: ADD_TAG, 
      tag
    });
  }
}

export const writeTag = (tag) => {  
  return dispatch => {
    dispatch({
      type: WRITE_TAG,
      tag
    });
  }
}

export const deleteTag = (tag) => {
  return dispatch => {
    dispatch({
      type: DELETE_TAG,
      tag
    })
  }
}

export const writeDescription = (description) => {
  return dispatch => {
    dispatch({
      type: WRITE_DESCRIPTION, 
      description
    });
  }
}

export const addChildren = (note) => {
  return dispatch => {
    dispatch({
      type: ADD_CHILDREN,
      note
    })
  }
}

export const removeChildren = (note) => {
  return dispatch => {
    dispatch({
      type: REMOVE_CHILDREN, 
      note
    })
  }
}

export const resetCollection = () => {
  return dispatch => {
    dispatch({
      type: RESET_COLLECTION
    })
  }
}

export const favoriteFlip = () => {
  return dispatch => {
    dispatch({ type: FAVORITE_FLIP });
  }
}

export const startLoad = () => {
  return dispatch => {
    dispatch({ type: START_LOAD });
  }
}

export const endLoad = () => {
  return dispatch => {
    dispatch({ type: END_LOAD });
  }
}

export const submitCollection = (updateURL) => {
  return (dispatch, getState) => {
    const collection = getState().collectionsOperations;

    if (collection.isLoading)
      return;

    const children = collection.children.map(child => ({
        id: child.id,
        title: child.title, 
        description: child.description,
        tags: child.tags,
        favorite: child.favorite
      })
    );

    const { title, description, tags, favorite } = collection; 

    const newCollection = {
      title, 
      description,
      tags,
      children, 
      favorite, 
      id: uuidv4()
    };

    startLoad();

    axios
      .post('/api/collections', newCollection)
      .then(res => {
        // TODO Handle Errors
        updateURL();
        endLoad();
      })
  }
}

export const submitEditedCollection = (updateURL) => {
  return (dispatch, getState) => {
    const collection = getState().collectionsOperations;

    if (collection.isLoading)
      return;

    const children = collection.children.map(child => ({
        id: child.id,
        title: child.title, 
        description: child.description,
        tags: child.tags,
        favorite: child.favorite
      })
    );

    const { title, description, tags, favorite, id } = collection; 

    const newCollection = {
      title, 
      description,
      tags,
      children, 
      favorite, 
      id
    };

    startLoad();

    axios
      .put('/api/collections', newCollection)
      .then(res => {
        // TODO Handle Errors
        updateURL();
        endLoad();
      })
  }
}

export const deleteCollection = (updateURL) => {
  return (dispatch, getState) => {
    const collection = getState().collectionsOperations;

    if (collection.isLoading)
      return;

    // startLoad();

    axios
      .delete('/api/collections', { params: collection })
      .then(res => {
        // TODO Error handling
        // endLoading();
        updateURL();
      })
      .catch(err => console.log(err));
  }
}

export const loadCollection = (collection) => {
  return dispatch => {
    dispatch({
      type: LOAD_COLLECTION, 
      title: collection.title,
      description: collection.description, 
      tags: collection.tags, 
      children: collection.children, 
      id: collection.id, 
      favorite: collection.favorite
    });
  }
}