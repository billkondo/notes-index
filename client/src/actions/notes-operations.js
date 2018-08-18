import {
  WRITE_TITLE,
  WRITE_DESCRIPTION,
  ADD_COMMENT,
  WRITE_COMMENT,
  ADD_TAG,
  RESET_NOTE,
  DELETE_COMMENT,
  DELETE_TAG,
  LOAD_NOTE
} from '../types/notes-operations';

export const writeTitle = (newTitle) => ({
  type: WRITE_TITLE,
  title: newTitle
});


export const writeDescription = (newDescription) => ({
  type: WRITE_DESCRIPTION,
  description: newDescription
});


export const addComment = (newComment) => ({
  type: ADD_COMMENT,
  newComment
});


export const writeComment = (newComment, id) => ({
  type: WRITE_COMMENT,
  newComment,
  id
});


export const addTag = (newTag) => ({
  type: ADD_TAG,
  newTag
});


export const resetNote = () => ({
  type: RESET_NOTE
});


export const deleteComment = (index) => ({
  type: DELETE_COMMENT,
  index
});


export const deleteTag = (index) => ({
  type: DELETE_TAG,
  index
});

export const loadNote = (note) => ({
  type: LOAD_NOTE, 
  title: note.title, 
  description: note.description, 
  commentaries: note.commentaries, 
  tags: note.tags
})


