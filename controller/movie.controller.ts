import { Request, Response, NextFunction } from 'express';
import MovieService from '../service/movie.service';

export default class MovieController {
  static getMovie = async (req: Request, res: Response) => {
    const { success, data, error } = await MovieService.getMovie();

    res.status(201).json({ success, data, error });
  };
  static createMovie = async (req: Request, res: Response) => {
    const { name, year, genre } = req.body;
    const { success, message, data, error } = await MovieService.createMovie({
      name,
      year,
      genre,
    });

    res.status(201).json({ success, message, data, error });
  };

  static updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, year, genre } = req.body;

    const { success, message, data, error } = await MovieService.updateMovie({
      id,
      name,
      year,
      genre,
    });

    res.status(201).json({ success, message, data, error });
  };

  static deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { success, message, data, error } = await MovieService.deleteMovie({
      id,
    });

    res.status(201).json({ success, message, data, error });
  };
}
