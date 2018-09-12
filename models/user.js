import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  passwordHash: String,
  email: String,
  userId: String
})

const User = mongoose.model('User', userSchema);

export default User;