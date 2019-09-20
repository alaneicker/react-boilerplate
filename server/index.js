import path from 'path';
import fs from 'fs';
import express from 'express';
import pretty from 'pretty';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/components/app';

const staticPath = path.resolve(__dirname, '..');

const indexPath = path.resolve(staticPath, 'template.html');
const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.static(staticPath));

app.get('/*', (req, res) => { // '^/$'
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve(indexPath);
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      pretty(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`), { ocd: true })
    );
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});