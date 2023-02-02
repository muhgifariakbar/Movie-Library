import { Request, Response, NextFunction } from 'express';
import ActorService from '../service/actor.service';

export default class ActorController {
  static getActor = async (req: Request, res: Response) => {
    const { success, data, error } = await ActorService.getActor();

    res.status(201).json({ success, data, error });
  };
  static createActor = async (req: Request, res: Response) => {
    const { name, movieId } = req.body;
    const { success, message, data, error } = await ActorService.createActor({
      name,
      movieId,
    });

    res.status(201).json({ success, message, data, error });
  };

  static updateActor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, movieId } = req.body;

    const { success, message, data, error } = await ActorService.updateActor({
      id,
      name,
      movieId,
    });

    res.status(201).json({ success, message, data, error });
  };

  static deleteActor = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { success, message, data, error } = await ActorService.deleteActor({
      id,
    });

    res.status(201).json({ success, message, data, error });
  };
}
