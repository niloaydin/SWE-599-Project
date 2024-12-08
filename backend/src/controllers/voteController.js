
const voteForDiscussion = async (req, res) => {
    console.log("voteForDiscussion controller");
    return res.status(200).json({ message: 'voteForDiscussion controller' });
}

const removeVoteForDiscussion = async (req, res) => {
    console.log("removeVoteForDiscussion controller");
    return res.status(200).json({ message: 'removeVoteForDiscussion controller' });
}

module.exports={
    voteForDiscussion,
    removeVoteForDiscussion
}