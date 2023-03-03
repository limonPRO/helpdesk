const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

const routes = require('./routes/route')


mongoose.connect('mongodb://localhost:27017/helpdesk', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


  app.use(express.json());
  app.use('/api', routes);

  app.listen(port, () => {
    console.log(` Server running on port ${port}`);
  });
  
