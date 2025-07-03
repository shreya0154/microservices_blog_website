const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById
} = require('../controllers/postController');


const verifyToken = require('../middleware/authMiddleware');


router.post('/createPost', verifyToken, createPost);


router.get('/getAllPosts', getAllPosts);
router.get('/getPost/:id', getPostById);

// Health check endpoints
router.get('/health/liveness', (req, res) => {
  res.status(200).json({ status: 'Alive' });
});

router.get('/health/readiness', (req, res) => {
  res.status(200).json({ status: 'Ready' });
});

module.exports = router;

