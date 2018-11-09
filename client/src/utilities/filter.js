import axios from 'axios';

export const filterNotesByTags = tags =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/notes/filter', { params: { tags } })
      .then(res => {
        const { notes } = res.data;
        resolve(notes);
      })
      .catch(err => reject(err));
  });

export const filterCollectionsByTags = tags =>
  new Promise((resolve, reject) => {
    axios
      .get('/api/collections/filter', { params: { tags } })
      .then(res => {
        const { collections } = res.data;
        resolve(collections);
      })
      .catch(err => reject(err));
  });
