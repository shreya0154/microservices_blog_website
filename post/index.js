// post/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const app = express();

app.use(express.json());
app.use('/post', postRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Post DB');
    app.listen(process.env.PORT, () => {
      console.log(`Post service running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));

