require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());


app.get('/health/liveness', (req, res) => {
  res.status(200).send('Gateway is alive');
});


app.get('/health/readiness', async (req, res) => {
  try {
    // Optionally ping dependencies like auth and post services to ensure readiness
    await axios.get(`${process.env.AUTH_SERVICE_URL}/health/liveness`);
    await axios.get(`${process.env.POST_SERVICE_URL}/health/liveness`);
    res.status(200).send('Gateway is ready');
  } catch (error) {
    res.status(500).send('One or more downstream services are unavailable');
  }
});

// Auth routes
app.post('/auth/register', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/register`, req.body);
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ message: err.message });
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/login`, req.body);
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ message: err.message });
  }
});

// Post routes
app.post('/post/createPost', async (req, res) => {
  const response = await axios.post(`${process.env.POST_SERVICE_URL}/post/createPost`, req.body);
  res.status(response.status).json(response.data);
});

app.get('/post/getAllPosts', async (req, res) => {
  const response = await axios.get(`${process.env.POST_SERVICE_URL}/post/getAllPosts`);
  res.status(response.status).json(response.data);
});

app.get('/post/getPost/:id', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.POST_SERVICE_URL}/post/getPost/${req.params.id}`);
    res.status(response.status).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({ message: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`API Gateway running on port ${process.env.PORT}`);
});

