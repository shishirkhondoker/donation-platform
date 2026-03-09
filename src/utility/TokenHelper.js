const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, _id) => {
  const key = process.env.KEY;
  let EXPIRE = { expiresIn: "24h" };
  let PAYLOAD = { email: email, _id: _id };

  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

exports.DecodeToken = (token) => {
  try {
    const key = process.env.KEY;
    return jwt.verify(token, KEY);
  } catch (e) {
    return null;
  }
};
