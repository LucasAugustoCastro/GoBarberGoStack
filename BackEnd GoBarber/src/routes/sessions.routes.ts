import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// rotas o que deve ter: Receber a requisiçao, chamar outro arquivo, devolver uma resposta
/**
 * Repositories
 * services
 *
 */
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticateUserService();
  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });
  delete user.password;
  return response.json({ user, token });
});

export default sessionsRouter;
