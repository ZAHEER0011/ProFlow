// backend/src/server.js
const http = require('http');
const app = require('./app');
const config = require('./config');

const PORT = process.env.PORT || config.port || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`ProFlow backend listening on port ${PORT} (env: ${process.env.NODE_ENV || 'development'})`);
});
