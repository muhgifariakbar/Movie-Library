import { Router, Request, Response, NextFunction } from 'express';
import ActorController from '../../controller/actor.controller';
const router: Router = Router();

router.get('/', ActorController.getActor);
router.post('/', ActorController.createActor);
router.put('/:id', ActorController.updateActor);
router.delete('/:id', ActorController.deleteActor);

export default router;
