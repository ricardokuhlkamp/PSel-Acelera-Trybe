import { Router } from 'express';
import { create } from '../controllers/accountController';

const accountRouter = Router();

accountRouter.post('/create', create);

export default accountRouter;