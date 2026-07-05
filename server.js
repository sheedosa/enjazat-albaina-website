// Minimal static file server for local preview.
// Adds sensible Cache-Control + gzip so the dev preview behaves like production.
// (For real hosting, prefer a CDN / nginx / static host with the headers below.)
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = __dirname;
const PORT = process.env.PORT || 4173;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

// Text types benefit from gzip; images are already compressed.
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.svg', '.xml', '.txt', '.json']);

function cacheControl(ext) {
  // Dev preview: always revalidate code/markup so edits show up immediately.
  // (Production hosting should use long-lived, hashed-asset caching — see README.)
  if (['.html', '.css', '.js'].includes(ext)) return 'no-cache';
  if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico'].includes(ext)) return 'public, max-age=86400';
  return 'no-cache';
}

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(ROOT, path.normalize(urlPath).replace(/^(\.\.[/\\])+/, ''));
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      'Content-Type': TYPES[ext] || 'application/octet-stream',
      'Cache-Control': cacheControl(ext),
      'X-Content-Type-Options': 'nosniff',
    };
    const acceptsGzip = /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    if (acceptsGzip && COMPRESSIBLE.has(ext)) {
      const gz = zlib.gzipSync(data);
      headers['Content-Encoding'] = 'gzip';
      headers['Vary'] = 'Accept-Encoding';
      res.writeHead(200, headers);
      return res.end(gz);
    }
    res.writeHead(200, headers);
    res.end(data);
  });
}).listen(PORT, () => console.log('Preview server on http://localhost:' + PORT));
