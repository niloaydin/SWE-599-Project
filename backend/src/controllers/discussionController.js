const creatorModel = require('../models/creatorModel');
const discussionModel = require('../models/discussionModel');
const { generateRandomString } = require('../utils/discussionUtils');

const createDiscussion = async (req, res) => {

  const {email,title,description,duration} = req.body;
  try{

  const creator = await creatorModel.create({
    email: email
  })
  await creator.save();

  const startDate = new Date(); 
  const endDate = new Date(startDate.getTime() + duration * 24 * 60 * 60 * 1000); 

  const dLink=generateRandomString();
  const adminLink=generateRandomString();

  console.log("dLink",dLink);
  console.log("adminLink",adminLink);

  const discussion = await discussionModel.create({
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate,
    dLink: dLink,
    adminLink: adminLink,
    creatorId: creator._id,
    isVotingStarted: false
  })

  await discussion.save();

  return res.status(200).json({ message: discussion });
}catch(error){
  return res.status(400).json({ message: error.message });
}
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
