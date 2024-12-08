const CreatorModel = require('../models/creatorModel');
const DiscussionModel = require('../models/discussionModel');
const UserLinkModel = require('../models/userLinkModel');
const CollectorModel = require('../models/collectorModel');
const { generateRandomString } = require('../utils/discussionUtils');

const createDiscussion = async (req, res) => {

  const { email, title, description, duration } = req.body;
  try {

    let creator = await CreatorModel.findOne({ email: email });

    if (!creator) {
      creator = await CreatorModel.create({
        email: email
      })
    }

    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + duration * 24 * 60 * 60 * 1000);

    const dLink = generateRandomString();
    const adminLink = generateRandomString();

    console.log("dLink", dLink);
    console.log("adminLink", adminLink);

    const discussion = await DiscussionModel.create({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      dLink: dLink,
      adminLink: adminLink,
      creatorId: creator._id,
      isVotingStarted: false
    })

    return res.status(200).json({ message: discussion });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getSingleDiscussion = async (req, res) => {
  console.log('getDiscussion controller');
  return res.status(200).json({ message: 'getDiscussion controller' });
};

const createCollectorForDiscussion = async (req, res) => {
  const { discussionLink } = req.params;
  const { collectorName, emails, type } = req.body;

  try {
    if (!['general', 'specific'].includes(type)) {
      return res.status(400).json({ error: 'Invalid collector type' });
    }

    const discussion = await DiscussionModel.findOne({ dLink: discussionLink });

    if (!discussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    const collector = await CollectorModel.create({
      discussionId: discussion._id,
      collectorName: collectorName,
      collectorType: type,
      listLinks: []
    })

    let listLinks = [];

    if (type === 'general') {
      const generalLink = generateRandomString();
      listLinks.push(generalLink);

      await UserLinkModel.create({
        collectorId: collector._id,
        discussionId: discussion._id,
        linkUUID: generalLink,
      })

    } else if (type === 'specific' && emails && emails.length > 0) {

      for (const email of emails) {
        const personalizedLink = generateRandomString();

        await UserLinkModel.create({
          collectorId: collector._id,
          discussionId: discussion._id,
          email: email,
          linkUUID: personalizedLink
        })

        listLinks.push(personalizedLink);

      }
    }

    collector.listLinks = listLinks;
    await collector.save();

    return res.status(200).json({ message: collector });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
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
