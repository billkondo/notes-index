import { func, shape, string, bool, arrayOf } from 'prop-types';

export const historyObject = shape({
  push: func.isRequired
});

const tagsArray = arrayOf(string);

const commentObject = shape({
  comment: string.isRequired,
  id: string.isRequired
});

const commentsArray = shape(commentObject);

const noteObject = shape({
  title: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
  favorite: bool.isRequired
});

const notesArray = arrayOf(noteObject);

const childrenArray = arrayOf(noteObject);

const collectionObject = shape({
  title: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
  favorite: bool.isRequired
});

const collectionsArray = arrayOf(collectionObject);

const userObject = shape({
  username: string.isRequired,
  name: string.isRequired
});

export {
  collectionObject,
  collectionsArray,
  noteObject,
  childrenArray,
  tagsArray,
  notesArray,
  commentsArray,
  userObject
};
