import { Router } from 'express';

import Actor from './actor';
import Movie from './movie';
import Author from './author';
import Login from './login';
const router: Router = Router();
router.use('/login', Login);
router.use('/actor', Actor);
router.use('/movie', Movie);
router.use('/author', Author);

export default router;
