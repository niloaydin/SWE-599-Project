const mongoose = require('mongoose');

const userLinkSchema = new mongoose.Schema({
  collectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collector',
    required: true,
  },
  linkUUID: { type: String, required: true },
  email: { type: String},
});

const UserLink = mongoose.model('UserLink', userLinkSchema);
module.exports = UserLink;
