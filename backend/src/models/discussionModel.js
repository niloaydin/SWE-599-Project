const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  adminLink: { type: String },
  dLink: { type: String },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Creator',
    required: true,
  },
});

const Discussion = mongoose.model('Discussion', discussionSchema);
module.exports = Discussion;
