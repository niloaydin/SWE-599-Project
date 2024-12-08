const express = require('express');
const discussionController = require('../controllers/discussionController');
const voteController = require('../controllers/voteController');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/create', discussionController.createDiscussion);
router.get('/:discussionLink/:userLink', discussionController.getSingleDiscussion);
router.post(
    '/:discussionLink/create-collector',
    discussionController.createCollectorForDiscussion
);
// router.post(
//     '/:discussionLink/create-general-link',
//     discussionController.createDiscussionGeneralLink
// );
// router.post(
//     '/:discussionLink/create-personalized-link',
//     discussionController.createPersonalizedDiscussionLink
// );

router.post('/:discussionLink/:userLink/vote', voteController.voteForDiscussion);
router.delete('/:discussionLink/:userLink/vote/:voteId', voteController.removeVoteForDiscussion);
router.post('/:discussionLink/:userLink/comment', commentController.commentOnDiscussion);
router.get('/:discussionLink/:userLink/comment', commentController.getCommentsForDiscussion);

module.exports = router;