import express from 'express';
import isEmpty from 'lodash/isEmpty';
import Collection from '../../models/collectionModel';

import authenticationCheckerMiddleware from '../../middlewares/authentication-checker-middleware';
import newCollectionMiddleware from '../../middlewares/new-collection-middleware';
import { getUpdatedChildren } from '../../utils/getUpdatedChildren';

const router = express.Router();

router.get('/filter', authenticationCheckerMiddleware, (req, res) => {
  Collection.find({ userId: req.userId })
    .exec()
    .then(collections => {
      const { tags } = req.query;
      const filteredCollections = [];

      collections.forEach(collection => {
        let selectCollection = false;

        tags.forEach(tag => {
          if (collection.tag.indexOf(tag) !== -1) selectCollection = true;
        });

        if (selectCollection) filteredCollections.push(collection);
      });

      res.status(200).json({ collections: filteredCollections });
    })
    .catch(err => res.status(500).json({ database: 'Filter Collections Problems', err }));
});

router.get('/favorite', authenticationCheckerMiddleware, (req, res) => {
  Collection.find({ userId: req.userId, favorite: true })
    .exec()
    .then(collections => {
      res.status(200).json({ collections });
    })
    .catch(err => res.status(500).json({ database: 'Getting Favorite Collections Problem', err }));
});

// Getting list of Collections from Database
router.get('/', authenticationCheckerMiddleware, (req, res) => {
  Collection.find({ userId: req.userId })
    .select('title description tags children favorite id')
    .exec()
    .then(collections => res.status(200).json(collections));
});

// Getting a specific Collection from Database
router.get('/:id', authenticationCheckerMiddleware, (req, res) => {
  Collection.findOne({ id: req.params.id, userId: req.userId })
    .exec()
    .then(collection => {
      let newCollection = {};

      getUpdatedChildren(collection.children)
        .then(children => {
          if (!isEmpty(collection)) {
            newCollection = {
              title: collection.title,
              description: collection.description,
              tags: collection.tags,
              children,
              favorite: collection.favorite,
              id: collection.id
            };
          }

          res.status(200).json(newCollection);
        })
        .catch(err => res.status(500).json({ database: 'Problem in getting children ', err }));
    });
});

// Adding a collection to Database
router.post('/', authenticationCheckerMiddleware, newCollectionMiddleware, (req, res) => {
  const newCollection = new Collection(req.newCollection);

  newCollection
    .save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json({ success: false, err }));
});

// Updating Collection from Database
router.put('/', authenticationCheckerMiddleware, newCollectionMiddleware, (req, res) => {
  Collection.findOne({ id: req.body.id, userId: req.userId })
    .exec()
    .then(collection => {
      collection.set(req.newCollection);
      collection.save(err => {
        if (err) res.status(400).json({ database: 'Could not save collection', err });
        else res.status(200).json(req.newCollection);
      });
    })
    .catch(err => res.status(500).json({ database: 'Could not find collection to update', err }));
});

// Delete Collection from Database
router.delete('/', authenticationCheckerMiddleware, (req, res) => {
  Collection.findOneAndRemove({ id: req.query.id, userId: req.userId })
    .exec()
    .then(doc => {
      if (isEmpty(doc)) res.status(400).json({ database: 'Could not find collection to delete' });
      else res.status(200).json(doc);
    })
    .catch(err => res.status(500).json({ database: 'Could not delete collection', err }));
});

export default router;
