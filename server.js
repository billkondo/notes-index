import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import notes from './routes/api/notes';
import signUp from './routes/api/authentication/signUp';
import signIn from './routes/api/authentication/signIn';

const app = express();
app.use(bodyParser.json());

// Routers
app.use('/api/auth/signin', signIn);
app.use('/api/auth/signUp', signUp);
app.use('/api/notes', notes);

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log('Error', err))

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`SERVER is ON on port ${port}`);
});

