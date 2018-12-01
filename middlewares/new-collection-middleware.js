/*
  Middleware for creating a new collection object.

  INPUT: body object that contains the data of the new collection
  OUTPUT: newCollection object in request
*/

export default (req, res, next) => {
  const newCollection = {
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    children: req.body.children,
    favorite: req.body.favorite,
    id: req.body.id,
    userId: req.userId
  };

  req.newCollection = newCollection;
  next();
};
