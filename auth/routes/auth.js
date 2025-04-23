const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Health check endpoints for Kubernetes
router.get('/health/liveness', (req, res) => {
  res.status(200).json({ status: 'Alive' });
});

router.get('/health/readiness', (req, res) => {
  // Optional: Add checks like DB connection status before confirming readiness
  res.status(200).json({ status: 'Ready' });
});

module.exports = router;

