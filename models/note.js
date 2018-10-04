import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String, 
  tags: Array, 
  commentaries: Array, 
  description: String,
  id: String,
  userId: String,
  favorite: { type: Boolean, default: false }
});

const Note = mongoose.model('Note', noteSchema);

export default Note;



