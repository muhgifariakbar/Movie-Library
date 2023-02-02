import { Router, Request, Response, NextFunction } from 'express';
import MovieController from '../../controller/movie.controller';
const router: Router = Router();

router.get('/', MovieController.getMovie);
router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);
export default router;
