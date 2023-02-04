const jwt = require('jsonwebtoken');

function createToken(params: any) {
  return jwt.sign(params, process.env.secret);
}

function verifyToken(params: any) {
  return jwt.verify(params, process.env.secret);
}

export { createToken, verifyToken };
