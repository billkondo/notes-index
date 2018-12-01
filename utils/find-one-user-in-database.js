import User from '../models/userModel';

/*
  Promises that returns one username in database. 
  Return the user object if it is found, empty object otherwise.
*/

// Find user by USERNAME
export const findUserByUsername = username =>
  new Promise((resolve, reject) => {
    User.findOne({ username })
      .select('username passwordHash')
      .exec()
      .then(userDatabase => resolve(userDatabase))
      .catch(err => reject(err));
  });

// Find user by EMAIL
export const findUserByEmail = email =>
  new Promise((resolve, reject) => {
    User.findOne({ email })
      .select('email passwordHash')
      .exec()
      .then(emailDatabase => resolve(emailDatabase))
      .catch(err => reject(err));
  });
