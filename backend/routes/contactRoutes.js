const express = require('express');
const router = express.Router();

// @route   POST api/contact
// @desc    Send contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    // Add your email sending logic here
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
