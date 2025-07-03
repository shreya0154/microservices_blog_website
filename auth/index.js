require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Auth DB');
    app.listen(process.env.PORT, () => {
      console.log(`Auth service running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
 


