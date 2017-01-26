/* eslint-disable no-console */
// Hooks up demo boilerplate application with webpack's development server. Not essential for
// understanding how to code frontend codebases; just makes demo easier to run and update.

import app from './app';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';

const port = 3000;
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
}));
app.listen(port, () => console.log('Listening on localhost:3000'));
