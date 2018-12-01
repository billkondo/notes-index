/*
  Middleware for creating a new user object.

  INPUT: body object that contains the data of the new user
  OUTPUT: newUser object in request
*/

export default (req, res, next) => {
  const newUser = {
    username: req.body.username,
    name: req.body.name,
    exp: req.body.exp
  };

  req.newUser = newUser;
  next();
};
