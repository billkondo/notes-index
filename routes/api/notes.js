import express from 'express';
import Note from '../../models/note';
import isEmpty from 'lodash/isEmpty';

import verify from '../../validation/verifyMiddleware';
import newNoteMiddleware from '../../middlewares/newNoteMiddleware';

const router = express.Router();

router.get('/favorite', verify, (req, res) => {
  Note
    .find({ userId: req.userId, favorite: true })
    .exec()
    .then(notes => {
      res.status(200).json({ notes });
    })
    .catch(err => res.status(500).json({ database: "Getting Favorite Notes Problem", err }));
});

// Filter Notes By Tags
router.get('/filter', verify, (req, res) => {
  Note  
    .find({ userId: req.userId })
    .exec()
    .then(notes => {
      const { tags } = req.query;
      let filteredNotes = [];

      for (const note of notes) {
        for (const tag of tags) {
          if (note.tags.indexOf(tag) !== -1) {
            filteredNotes.push(note);
            break;
          }
        }
      }

      res.status(200).json({ notes: filteredNotes });
    })
    .catch(err => res.status(500).json({ database: "Filter Notes Problem", err }));
}); 

// Getting List of Notes from Database
router.get('/', verify, (req, res) => {
  Note
    .find({ userId: req.userId })
    .select("title tags commentaries description favorite id")
    .exec()
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json({ database: "Getting All Notes Problem", err }));
});

// Getting a specific Note from Database
router.get('/:id', verify, (req, res) => {
  Note
    .findOne({ id: req.params.id, userId: req.userId })
    .exec()
    .then(note => {
      let newNote = {};

      if (!isEmpty(note)) {
        newNote = {
          title: note.title, 
          description: note.description, 
          commentaries: note.commentaries, 
          tags: note.tags, 
          favorite: note.favorite, 
          id: note.id
        };
      }

      res.status(200).json(newNote);
    })
    .catch(err => res.status(500).json({ database: "Getting Note by ID Problem", err }))
});

// Adding Note To Database
router.post('/', verify, newNoteMiddleware, (req, res) => {
  const newNote = new Note(req.newNote);
    
  newNote
    .save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json({ database: "Add Problem", err }));
});

// Updating Note from Database
router.put('/', verify, newNoteMiddleware, (req, res) => {
  Note
    .findOne({ id: req.body.id, userId: req.userId })
    .exec()
    .then(note => {
      note.set(req.newNote);
      note.save(err => {
        if (err) res.status(400).json({ database: "Could not save note", err});
        else res.status(200).json(req.newNote);
      });
    })
    .catch(err => res.staus(500).json({ database: "Could not find note to update", err }));
});

// Deleting Note from Database
router.delete('/', verify, (req, res) => {
  Note
    .findOneAndRemove({ id: req.query.id, userId: req.userId })
    .exec()
    .then(doc => {
      if (isEmpty(doc)) res.status(400).json({ message: "It was not possible to delete note " });
      else res.status(200).json(doc);
    })
    .catch(err => res.status(500).json({ database: "Delete Problem", err }));
});

export default router;
