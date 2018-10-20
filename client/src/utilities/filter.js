import axios from 'axios';

export const filterNotesByTags = (tags) => new Promise((resolve, reject) => {
  axios
    .get('/api/notes', { params: { tags }})
    .then(res => {
      const notes = res.data.notes;
      resolve(notes);
    })
    .catch(err => reject(err));
});