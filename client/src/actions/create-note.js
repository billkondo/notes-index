import { 
  CREATE_NOTE_ENTER_TITLE, 
  CREATE_NOTE_ENTER_DESCRIPTION,
  CREATE_NOTE_ADD_COMMENT,
  CREATE_NOTE_WRITE_COMMENT,
  CREATE_NOTE_ADD_TAG,
  CREATE_NOTE_RESET 
} from '../types/types';

const enterNewTitle = (newTitle) => {
  return ({
    type: CREATE_NOTE_ENTER_TITLE, 
    title: newTitle
  });
}

const enterNewDescription = (newDescription) => {
  return ({
    type: CREATE_NOTE_ENTER_DESCRIPTION, 
    description: newDescription
  });
}

const addNewComment = (newComment) => {
  return ({
    type: CREATE_NOTE_ADD_COMMENT
  });
}

const writeNewComment = (newComment, id) => {
  return ({
    type: CREATE_NOTE_WRITE_COMMENT,
    newComment, 
    id
  });
}

const addNewTag = (newTag) => {
  return ({
    type: CREATE_NOTE_ADD_TAG, 
    newTag
  });
}

const resetNote = () => {
  return ({
    type: CREATE_NOTE_RESET
  });
}

export {
  enterNewTitle, 
  enterNewDescription,
  addNewComment,
  writeNewComment, 
  addNewTag,
  resetNote
}