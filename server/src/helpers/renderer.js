import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default req => {

  const sheet = new ServerStyleSheet();
  
  const content = renderToString(sheet.collectStyles(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  ));
  
  const styleTags = sheet.getStyleTags();
  return `
    <html>
      <head>
      ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
