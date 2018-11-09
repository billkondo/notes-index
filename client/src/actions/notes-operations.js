import uuidv4 from 'uuid/v4';
import axios from 'axios';

import {
  WRITE_TITLE,
  WRITE_DESCRIPTION,
  ADD_COMMENT,
  WRITE_COMMENT,
  ADD_TAG,
  RESET_NOTE,
  DELETE_COMMENT,
  DELETE_TAG,
  LOAD_NOTE,
  WRITE_TAG,
  FAVORITE_FLIP
} from '../types/notes-operations';

export const writeTitle = title => dispatch => {
  dispatch({
    type: WRITE_TITLE,
    title
  });
};

export const writeDescription = description => dispatch => {
  dispatch({
    type: WRITE_DESCRIPTION,
    description
  });
};

export const addComment = () => dispatch => {
  const id = uuidv4();
  const newComment = {
    comment: '',
    id
  };

  dispatch({
    type: ADD_COMMENT,
    newComment
  });
};

export const writeComment = (comment, id) => dispatch => {
  dispatch({
    type: WRITE_COMMENT,
    comment,
    id
  });
};

export const addTag = tag => dispatch => {
  dispatch({
    type: ADD_TAG,
    tag
  });
};

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const deleteTag = tag => dispatch => {
  dispatch({
    type: DELETE_TAG,
    tag
  });
};

export const resetNote = () => dispatch => {
  dispatch({
    type: RESET_NOTE
  });
};

export const writeTag = tag => dispatch => {
  dispatch({
    type: WRITE_TAG,
    tag
  });
};

export const loadNote = note => dispatch => {
  dispatch({
    type: LOAD_NOTE,
    title: note.title,
    description: note.description,
    commentaries: note.commentaries,
    tags: note.tags,
    favorite: note.favorite,
    id: note.id
  });
};

export const favoriteFlip = () => dispatch => {
  dispatch({ type: FAVORITE_FLIP });
};

export const submitNote = updateURL => (dispatch, getState) => {
  const note = getState().notesOperations;

  const newNote = {
    title: note.title,
    description: note.description,
    commentaries: note.commentaries,
    tags: note.tags,
    favorite: note.favorite,
    id: uuidv4()
  };

  axios
    .post('/api/notes', newNote)
    .then(res => {
      // TODO Error handling
      updateURL();
    })
    .catch(err => console.log(err));
};

export const submitEditedNote = updateURL => (dispatch, getState) => {
  const note = getState().notesOperations;

  const editedNote = {
    title: note.title,
    description: note.description,
    commentaries: note.commentaries,
    tags: note.tags,
    favorite: note.favorite,
    id: note.id
  };

  axios
    .put('/api/notes', editedNote)
    .then(res => {
      // TODO Error handling
      updateURL();
    })
    .catch(err => console.log(err));
};

export const deleteNote = updateURL => (dispatch, getState) => {
  const note = getState().notesOperations;

  axios
    .delete('/api/notes', { params: note })
    .then(res => {
      // TODO Error handling
      updateURL();
    })
    .catch(err => console.log(err));
};
