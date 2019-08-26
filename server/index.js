import path from 'path';
import fs from 'fs';
import express from 'express';
import pretty from 'pretty';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/components/app';

const isProd = process.env.NODE_ENV === 'production';
const staticPath = isProd ? path.resolve(__dirname, '..') : path.resolve(__dirname, '..', 'dist');
const PORT = process.env.PORT || 9000;
const app = express();
const router = express.Router();

const serverRenderer = (req, res, next) => {
  const context = {};
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    const renderedMarkup = data.replace(
      '__ROOT__',
      ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    );

    return res.send(pretty(renderedMarkup));
  });
};

router.use('^/$', serverRenderer);

router.use(
  express.static(staticPath, { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});