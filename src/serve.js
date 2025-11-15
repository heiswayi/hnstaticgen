const http = require("http");
const fs = require("fs");
const path = require("path");
const config = require("./config");

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.md': 'text/markdown'
};

const serve = () => {
  const port = config.dev.port || 8080;
  const publicDir = path.resolve(config.dev.outdir);

  const server = http.createServer((req, res) => {
    let filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);

    // Handle directory requests
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 - Not Found</h1>', 'utf-8');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`, 'utf-8');
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  server.listen(port, () => {
    console.log(`\n🌐 Development server running at http://localhost:${port}`);
    console.log(`📁 Serving files from: ${publicDir}\n`);
    console.log(`Press Ctrl+C to stop the server\n`);
  });
};

module.exports = serve;
