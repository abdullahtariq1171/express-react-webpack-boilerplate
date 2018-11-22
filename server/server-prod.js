const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('listening prod here')
})

app.listen(3000, () => console.log("Listening"))

