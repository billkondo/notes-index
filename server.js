const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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

const notes = require('./routes/api/notes');
app.use('/api/notes', notes);

app.listen(port, () => {
  console.log(`SERVER is ON on port ${port}`);
});
