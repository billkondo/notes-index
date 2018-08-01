const express = require('express');
const router = express.Router();
const Note = require('../../models/note');

router.get('/', (req, res) => {
  Note
    .find()
    .then(notes => res.json(notes));
});

router.post('/', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
    commentaries: req.body.commentaries,
    tags: req.body.tags
  });

  newNote.save().then(item => res.json(item));
});

router.delete('/:_id', (req, res) => {
  Note
    .findOneAndRemove({ _id: req.params._id })
    .exec()
    .then(doc => {
      if (!doc) { return res.status(404).end(); }
      return res.status(204).end();
    })
    .catch(err => next(err));
});

module.exports = router;
