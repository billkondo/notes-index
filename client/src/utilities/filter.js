import axios from 'axios';

export const filterNotesByTags = (tags) => new Promise((resolve, reject) => {
  axios
    .get('/api/notes/filter', { params: { tags }})
    .then(res => {
      const notes = res.data.notes;
      resolve(notes);
    })
    .catch(err => reject(err));
});

export const filterCollectionsByTags = (tags) => new Promise((resolve, reject) => {
  axios
    .get('/api/collections/filter', { params: { tags }})
    .then(res => {
      const collections = res.data.collections;
      resolve(collections);
    })
    .catch(err => reject(err));
});