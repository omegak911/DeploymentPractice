const express = require('express');
const path = require('path');
const parser = require('body-parser');

const matches = require('./bin/mockData');

const port = process.env.PORT || 4000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/api/matches', (req, res) => {
  res.status(200).send(matches);
})

app.listen(port, () => console.log('listening on port: ', port));