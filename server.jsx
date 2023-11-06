// server.js
import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { render } from './src/entry-server';

const __dirname = path.resolve();

async function createServer() {
  const app = express();

  
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  
  app.use(vite.middlewares);

  
  app.use('*', async (req, res) => {
    const appHtml = render(req.originalUrl);
    
    const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    const html = template.replace('<!--ssr-outlet-->', appHtml);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  });

  
  app.listen(3000);
}

createServer();
