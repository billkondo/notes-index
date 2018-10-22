import Note from '../models/note';
import mongoose from 'mongoose';

// Receive the notes from a collection
// And get these notes from database

export const getUpdatedChildren = (children) => new Promise((resolve, reject) => {
  const childrenID = children.map(child => new mongoose.Types.ObjectId(child));
  Note
    .find({ '_id':  { $in: childrenID } })
    .exec()
    .then(notes => {
      resolve(notes);
    })
    .catch(err => reject(err));
});
