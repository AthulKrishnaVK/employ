const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/viteapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define schema
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model('FormData', FormDataSchema);

// API routes
app.get('/', (req, res) => res.send('Backend is running!'));
app.post('/api/form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).send({ message: 'Form data saved successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
