// backend/src/config/index.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT ? Number(process.env.PORT) : 4000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/proflow_dev',
  jwtSecret: process.env.JWT_SECRET || 'dev_jwt_secret_change_me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  appUrl: process.env.APP_URL || 'http://localhost:4000',
  defaultCurrency: process.env.DEFAULT_CURRENCY || 'USD',
  defaultTimezone: process.env.DEFAULT_TIMEZONE || 'UTC'
};
