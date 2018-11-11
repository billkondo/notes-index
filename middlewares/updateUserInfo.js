export default (req, res, next) => {
  const newUser = {
    username: req.body.username,
    name: req.body.name,
    exp: req.body.exp
  };

  req.newUser = newUser;
  next();
};
