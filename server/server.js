const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send(' Hello from backend!');
});

// Connect to MongoDB
if (!MONGO_URI) {
  console.error('MONGO_URI not defined in .env file');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected');
  app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error(' MongoDB connection error:', error);
});
