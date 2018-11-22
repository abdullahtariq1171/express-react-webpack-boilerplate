const express = require('express');
const path = require('path');

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR))

app.use('/api', (req, res) => {
  res.send('server-prod.js')
})

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(8080, () => console.log("Listening"))
