import express from 'express';
import Note from '../../models/note';
import isEmpty from 'lodash/isEmpty';

const router = express.Router();

router.get('/', (req, res) => {
  Note
    .find()
    .exec()
    .then(notes => res.json(notes));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  
  Note
    .findOne({ id })
    .exec()
    .then(note => {
      let newNote = {};

      if (!isEmpty(note)) {
        newNote = {
          title: note.title, 
          description: note.description, 
          commentaries: note.commentaries, 
          tags: note.tags, 
          id: note.id
        };
      }

      res.status(200).json(newNote);
    })
    .catch(err => res.status(500).json({ success: false, err }))
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
    for (let note of notes) {
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
