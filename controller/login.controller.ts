import { Request, Response, NextFunction } from 'express';
import UserService from '../service/login.service';

export default class ActorController {
  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { success, message, data, error } = await UserService.login({
      email,
      password,
    });
    res.status(201).json({ success, message, data, error });
  };
}
