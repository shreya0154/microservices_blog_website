const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware');


router.post('/register', authController.register);
router.post('/login', authController.login);

// GET /auth/me
router.get("/me", verifyToken, async (req, res) => {
  const user = await User.findById(req.user.id);
  console.log('auth final pass')
  res.json({ user });
});


// Health check endpoints for Kubernetes
router.get('/health/liveness', (req, res) => {
  res.status(200).json({ status: 'Alive' });
});

router.get('/health/readiness', (req, res) => {
  res.status(200).json({ status: 'Ready' });
});

module.exports = router;

