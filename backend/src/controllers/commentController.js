
const commentOnDiscussion = async (req, res) => {
    console.log("commentOnDiscussion controller");
    return res.status(200).json({ message: 'commentOnDiscussion controller' });
}

const getCommentsForDiscussion = async (req, res) => {
    console.log("getCommentsForDiscussion controller");
    return res.status(200).json({ message: 'getCommentsForDiscussion controller' });
}

module.exports = {
    commentOnDiscussion,
    getCommentsForDiscussion
}