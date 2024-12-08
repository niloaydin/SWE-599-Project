const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectToMongo = require('./db/connection');
const discussionRoutes = require('./routes/discussionRoute');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/discussion", discussionRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    connectToMongo();
  });
}
