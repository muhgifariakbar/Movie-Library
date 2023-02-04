import { Router, Request, Response, NextFunction } from 'express';
import LoginController from '../controller/login.controller';
const router: Router = Router();

router.post('/', LoginController.login);

export default router;
