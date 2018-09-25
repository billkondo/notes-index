import express from 'express';
import Note from '../../models/note';
import isEmpty from 'lodash/isEmpty';

import verify from '../../validation/verifyMiddleware';

const router = express.Router();

// Getting List of Notes from Database
router.get('/', verify, (req, res) => {
  Note
    .find({ userId: req.userId })
    .select("title tags commentaries description id")
    .exec()
    .then(notes => res.status(200).json(notes));
});

// Getting a specific Note from Database
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

// Adding Note To Database
router.post('/', verify, (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    description: req.body.description,
    commentaries: req.body.commentaries,
    tags: req.body.tags,
    id: req.body.id,
    userId: req.userId
  });
    
  newNote
    .save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json({ success: false, err }));
});

// Updating Note from Database
router.put('/', verify, (req, res) => {
  const newNote = {
    title: req.body.title,
    description: req.body.description,
    commentaries: req.body.commentaries,
    tags: req.body.tags,
    id: req.body.id,
    userId: req.userId
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

// Deleting Note from Database
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
