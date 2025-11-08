// backend/src/app.js
const express = require('express');
require('express-async-errors'); // capture async errors without try/catch everywhere
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// ---- Middleware ----
app.use(cors());
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: false }));

// ---- Simple health route ----
app.get('/api/health', (req, res) => {
  return res.json({ ok: true });
});

// ---- Basic error handler ----
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

// ---- Connect to MongoDB (best-effort; non-blocking) ----
mongoose
  .connect(config.mongodbUri, { autoIndex: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    // Log the error but allow server to run for initial dev without DB
    console.warn('MongoDB connection warning:', err.message);
  });

module.exports = app;
