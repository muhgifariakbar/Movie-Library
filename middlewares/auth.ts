const { verifyToken } = require('../helper/jwt');
import { Request, Response, NextFunction } from 'express';
const { User } = require('../models');
async function Authentication(req: Request, res: Response, next: NextFunction) {
  try {
    let access_token = req.headers.access_token;
    if (!access_token)
      throw { name: 'access token not found, please login first' };
    let payload = verifyToken(access_token);
    // to look later
    // let user = await User.findByPk(payload.id);
    // req.user = {
    //   id: payload.id,
    // };
    // if (!user) {
    //   throw { name: 'forbidden' };
    // } else {
    //   req.user = { id: user.id };
    // }
    next();
  } catch (error) {
    res.status(401).json({ message: `Please Login First` });
  }
}

export { Authentication };
