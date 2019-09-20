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
const indexPath = path.resolve('./dist/index.html');
const PORT = process.env.PORT || 9000;
const app = express();

const serverRenderer = (req, res) => {
  const context = {};

  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    const renderedApp = data.replace(
      '<div id="root"></div>',
      ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    );

    return res.send(pretty(renderedApp, {ocd: true}));
  });
};

app.use(
  express.static(staticPath, { maxAge: '30d' })
);

app.get('*', serverRenderer);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});