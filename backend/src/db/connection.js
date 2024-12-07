/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongo_db_password = process.env.MONGO_DB_PASSWORD;

let url = `mongodb+srv://nilay:${mongo_db_password}@cluster0.6zfqt.mongodb.net/`;

console.log('Connection URL:', url);
console.log('AAA');

const connectToMongo = () => {
  mongoose.connect(url);

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Database connected to mongodb');
  });

  db.on('error', (err) => {
    console.error('Database connection error: ', err);
  });
};

module.exports = connectToMongo;
