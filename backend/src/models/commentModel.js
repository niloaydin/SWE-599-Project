const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  collectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collector',
    required: true,
  },
  discussionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discussion',
    required: true,
  },
  content: { type: String, required: true },
  commentType: { type: String, enum: ['pros', 'cons'], required: true },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
