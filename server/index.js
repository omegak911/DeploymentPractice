const express = require('express');
const path = require('path');
const parser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();

app.use((req, res, next) => {
  console.log(`req url: ${req.url} and method: ${req.method}`);
  next();
})

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.listen(port, () => console.log('listening on port: ', port));