const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'favicon.svg' : req.url);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404); res.end('Not found'); return;
  }
  const ext = path.extname(filePath);
  const map = {'.svg':'image/svg+xml','.html':'text/html','.png':'image/png'};
  res.writeHead(200, {'Content-Type': map[ext] || 'application/octet-stream'});
  res.end(fs.readFileSync(filePath));
});
server.listen(8765, () => console.log('http://localhost:8765'));
