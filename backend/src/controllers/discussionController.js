const createDiscussion = async (req, res) => {
  console.log('createDiscussion controller');
  return res.status(200).json({ message: 'createDiscussion controller' });
};

const getSingleDiscussion = async (req, res) => {
  console.log('getDiscussion controller');
  return res.status(200).json({ message: 'getDiscussion controller' });
};

const createCollectorForDiscussion = async (req, res) => {
  console.log('createCollectorForDiscussion controller');
  return res.status(200).json({ message: 'createCollectorForDiscussion controller' });
};

const createDiscussionGeneralLink = async (req, res) => {
  console.log('createDiscussionGeneralLink controller');
  return res.status(200).json({ message: 'createDiscussionGeneralLink controller' });
};

const createPersonalizedDiscussionLink = async (req, res) => {
  console.log('createPersonalizedDiscussionLink controller');
  return res.status(200).json({ message: 'createPersonalizedDiscussionLink controller' });
};

module.exports = {
  createDiscussion,
  getSingleDiscussion,
  createCollectorForDiscussion,
  createDiscussionGeneralLink,
  createPersonalizedDiscussionLink,
};
