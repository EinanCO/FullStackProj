const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');


// Login route handler
router.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      console.error('An error occurred:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else if (!user) {
      res.json({ success: false, message: 'Invalid username or password' });
    } else {
      // User found, login successful
      res.json({ success: true, message: 'Login successful' });
    }
  });
});

// Signup route handler
router.post('/api/signup', (req, res) => {
  const { username, password } = req.body;

  // Create a new user object
  const newUser = new User({ username, password });

  // Save the new user to the database
  newUser.save((err) => {
    if (err) {
      console.error('An error occurred:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      res.json({ success: true, message: 'Signup successful' });
    }
  });
});

module.exports = router;
