import express from 'express';
import Collection from '../../models/collection';

const router = express.Router();

import verify from '../../validation/verifyMiddleware';

// verify: Middleware to check user authorization
//         After authorization, you can access the user id in req.userId

// Getting list of Collections from Database
router.get('/', verify, (req, res) => {
  Collection
    .find({ userId: req.userId })
    .select("title description tags children favorite id")
    .exec()
    .then(collections => res.status(200).json(collections))
});

// Adding a collection to Database
router.post('/', verify, (req, res) => {
  const newCollection = new Collection({
    title: req.body.title, 
    description: req.body.description, 
    tags: req.body.tags, 
    children: req.body.children, 
    favorite: req.body.favorite, 
    id: req.body.id,
    userId: req.userId
  });

  newCollection
    .save()
    .then(item => res.status(200).json(item))
    .catch(err => res.status(500).json({ success: false, err }))
});

export default router;