const crypto = require('crypto');

const generateRandomString = () => {
  return crypto.randomBytes(8).toString('hex'); // 32-character hexadecimal string
};

module.exports = {
    generateRandomString
}