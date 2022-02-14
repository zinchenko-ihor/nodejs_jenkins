'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world from Zinchenko Ihor\n');
  res.send('This is node_js app on docker container\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
