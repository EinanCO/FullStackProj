// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

// Create an Express application
const app = express();
app.use(express.static('public'));
// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoURL = 'mongodb://db:27017/mydatabase';


// Connect to MongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));

// Define a User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Define a User model
const User = mongoose.model('User', userSchema);

// Read all files in the 'api' folderr
fs.readdirSync('./api').forEach(file => {
  // Exclude non-JavaScript files and index.js
  if (file.endsWith('.js') && file !== 'index.js') {
    const route = require(`./api/${file}`);
    app.use('/', route);
  }
});

app.get('/', (req, res) => {
  res.sendFile('public/login.html', { root: __dirname });
});

app.get('/contactus', (req, res) => {
  res.sendFile('public/contactus.html', { root: __dirname });
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
