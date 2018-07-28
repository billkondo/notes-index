const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String, 
  tags: Array, 
  commentaries: Array, 
  description: String
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;


