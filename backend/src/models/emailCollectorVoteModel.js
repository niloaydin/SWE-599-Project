const emailCollectorVoteSchema = new mongoose.Schema({
  collectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Collector',
    required: true,
  },
  userLinkId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserLink',
    required: true,
  },
  alreadyVoted: { type: Boolean, default: false },
});

const EmailCollectorVote = mongoose.model(
  'EmailCollectorVote',
  emailCollectorVoteSchema
);
module.exports = EmailCollectorVote;
