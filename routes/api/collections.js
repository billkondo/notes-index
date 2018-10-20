import express from 'express';
import Collection from '../../models/collection';
import isEmpty from 'lodash/isEmpty';

const router = express.Router();

import verify from '../../validation/verifyMiddleware';
import newCollectionMiddleware from '../../middlewares/newCollectionMiddleware';

router.get('/favorite', verify, (req, res) => {
  Collection
    .find({ userId: req.userId, favorite: true })
    .exec()
    .then(collections => {
      res.status(200).json({ collections });
    })
    .catch(err => res.status(500).json({ database: "Getting Favorite Collections Problem", err }));
});

// Getting list of Collections from Database
router.get('/', verify, (req, res) => {
  Collection
    .find({ userId: req.userId })
    .select("title description tags children favorite id")
    .exec()
    .then(collections => res.status(200).json(collections))
});

// Getting a specific Collection from Database
router.get('/:id', verify, (req, res) => {
  Collection
    .findOne({ id: req.params.id, userId: req.userId })
    .exec()
    .then(collection => {
      let newCollection = {};

      if (!isEmpty(collection)) {
        newCollection = {
          title: collection.title, 
          description: collection.description, 
          tags: collection.tags, 
          children: collection.children, 
          favorite: collection.favorite, 
          id: collection.id
        }
      }
      
      res.status(200).json(newCollection);
    })
});

// Adding a collection to Database
router.post('/', verify, newCollectionMiddleware, (req, res) => {
  const newCollection = new Collection(req.newCollection);

  newCollection
    .save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json({ success: false, err }))
});

// Updating Collection from Database
router.put('/', verify, newCollectionMiddleware, (req, res) => {
  Collection
    .findOne({ id: req.body.id, userId: req.userId })
    .exec()
    .then(collection => {
      collection.set(req.newCollection);
      collection.save(err => {
        if (err) res.status(400).json({ database: "Could not save collection", err });
        else res.status(200).json(req.newCollection);
      });
    })
    .catch(err => res.status(500).json({ database: "Could not find collection to update" , err }));
});

// Delete Collection from Database
router.delete('/', verify, (req, res) => {
  Collection
    .findOneAndRemove({ id: req.query.id, userId: req.userId })
    .exec()
    .then(doc => {
      if (isEmpty(doc)) res.status(400).json({ database: "Could not find collection to delete" });
      else res.status(200).json(doc);
    })
    .catch(err => res.status(500).json({ database: "Could not delete collection" }));
})  

export default router;