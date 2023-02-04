import { Router, Request, Response, NextFunction } from 'express';
import ActorController from '../../controller/actor.controller';
const router: Router = Router();
import { Authentication } from '../../middlewares/auth';

router.get('/', ActorController.getActor);
router.use(Authentication);
router.post('/', ActorController.createActor);
router.put('/:id', ActorController.updateActor);
router.delete('/:id', ActorController.deleteActor);
export default router;
