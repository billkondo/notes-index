/*
  Middleware for creating a new note object.

  INPUT: body object that contains the data of the new note
  OUTPUT: newNote object in request
*/

export default (req, res, next) => {
  const newNote = {
    title: req.body.title,
    description: req.body.description,
    commentaries: req.body.commentaries,
    tags: req.body.tags,
    favorite: req.body.favorite,
    id: req.body.id,
    userId: req.userId
  };

  req.newNote = newNote;
  next();
};
