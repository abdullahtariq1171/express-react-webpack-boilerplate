const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('listening dev here')
})

app.listen(3000, () => console.log("Listening"))

