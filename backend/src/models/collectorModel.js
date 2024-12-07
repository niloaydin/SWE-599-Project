const collectorSchema = new mongoose.Schema({
  discussionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discussion',
    required: true,
  },
  collectorName: { type: String, required: true },
  listLinks: [{ type: String }],
  collectorType: { type: String },
});

const Collector = mongoose.model('Collector', collectorSchema);
module.exports = Collector;
