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
  START_LOADING, 
  END_LOADING
} from '../types/notes-operations';

export const writeTitle = (title) => {
  return dispatch => {
    dispatch({
      type: WRITE_TITLE,
      title
    });
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

export const addComment = () => {
  return dispatch => {
    const id = uuidv4();
    const newComment = {
      comment: "",
      id
    };

    dispatch({
      type: ADD_COMMENT, 
      newComment
    })
  }
}

export const writeComment = (comment, id) => {
  return dispatch => {
    dispatch({
      type: WRITE_COMMENT, 
      comment, 
      id
    });
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

export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  id
});

export const deleteTag = (tag) => {
  return dispatch => {
    dispatch({
      type: DELETE_TAG, 
      tag
    });
  }
}

export const resetNote = () => {
  return dispatch => {
    dispatch({
      type: RESET_NOTE
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

export const loadNote = (note) => {
  return dispatch => {
    dispatch({
      type: LOAD_NOTE, 
      title: note.title, 
      description: note.description, 
      commentaries: note.commentaries, 
      tags: note.tags, 
      id: note.id
    });
  }
}

export const submitNote = (updateURL) => {
  return (dispatch, getState) => {
    const note = getState().notesOperations;
    
    if (note.isLoading) 
      return;

    dispatch({ type: START_LOADING });

    const newNote = {
      title: note.title, 
      description: note.description,
      commentaries: note.commentaries, 
      tags: note.tags,
      id: uuidv4()
    };

    axios
      .post('/api/notes', newNote)
      .then(res => {
        if (res.err) {

        }
        else {
          updateURL();
        }

        dispatch({ type: END_LOADING });
      })
      .catch()
  }
}