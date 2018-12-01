import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import userRouter from './routers/api/userRouter';
import notesRouter from './routers/api/notesRouter';
import collectionsRouter from './routers/api/collectionsRouter';
import authenticationRouter from './routers/api/authenticationRouter';

const app = express();
app.use(bodyParser.json());

// Routers
app.use('/api/user', userRouter);
app.use('/api/authentication', authenticationRouter);
app.use('/api/notes', notesRouter);
app.use('/api/collections', collectionsRouter);

const db = require('./config/keys').mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Database Connected'))
  .catch(err => console.log('Error', err));

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`SERVER is ON on port ${port}`);
});
