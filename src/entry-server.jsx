import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './Pages/Home';

export function render(url) {
  const appHtml = renderToString(<Home/>);
  return appHtml;
}