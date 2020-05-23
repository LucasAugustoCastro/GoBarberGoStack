import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
// rotas o que deve ter: Receber a requisiçao, chamar outro arquivo, devolver uma resposta

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {

//   return response.json(await appointmentsRepository.find());
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
