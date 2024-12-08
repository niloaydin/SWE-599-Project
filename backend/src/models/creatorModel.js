const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const Creator = mongoose.model('Creator', creatorSchema);
module.exports = Creator;
