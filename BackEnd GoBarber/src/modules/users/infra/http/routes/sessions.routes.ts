import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// rotas o que deve ter: Receber a requisiçao, chamar outro arquivo, devolver uma resposta
/**
 * Repositories
 * services
 *
 */
sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
