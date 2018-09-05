import express from 'express';
import Note from '../../models/note';

const router = express.Router();

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
    tags: req.body.tags,
    id: req.body.id
  });

  newNote.save().then(item => res.json(item));
});

router.put('/', (req, res) => {
  const newNote = {
    title: req.body.title,
    description: req.body.description,
    commentaries: req.body.commentaries,
    tags: req.body.tags,
    id: req.body.id
  }

  Note
  .find({ 'id': req.body.id })
  .exec()
  .then(notes => {
    for (note of notes) {
      note.set(newNote);
      note.save(err => {
        if (err) return res.sendStatus(404);
        res.sendStatus(200);
      })
    }
  })
  .catch(err => next(err));
});

router.delete('/', (req, res) => {
  Note
    .findOneAndRemove({ "id": req.body.id })
    .exec()
    .then(doc => {
      if (!doc) { return res.sendStatus(404); }
      return res.sendStatus(200);
    })
    .catch(err => next(err));
});

export default router;
