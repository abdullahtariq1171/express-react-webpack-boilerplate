const express = require('express');
const path = require('path');
const webpack = require('webpack')

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../webpack.dev.config.js')

const DIST_DIR = __dirname;

const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))


app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})

app.listen(8080, () => console.log("Listening"))

