import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String, 
  tags: Array, 
  description: String,
  id: String,
  userId: String,
  childsId: Array
});

const Collection = mongoose.model('Collection', noteSchema);

export default Collection;
