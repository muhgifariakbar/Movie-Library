import { Router, Request, Response, NextFunction } from 'express';
import MovieController from '../../controller/movie.controller';
const router: Router = Router();
import { Authentication } from '../../middlewares/auth';

router.get('/', MovieController.getMovie);
router.use(Authentication);
router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);
export default router;
