import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  passwordHash: String,
  email: String,
  userId: String,
  name: { type: String, default: '' },
  isActive: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

export default User;
