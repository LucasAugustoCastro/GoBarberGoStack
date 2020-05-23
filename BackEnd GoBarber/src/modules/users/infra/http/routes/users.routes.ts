import { Router } from 'express';
// multer = midleware de upload de arquivo no express, uasada pra aplicaçoes com sql
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

// rotas o que deve ter: Receber a requisiçao, chamar outro arquivo, devolver uma resposta
/**
 * Repositories
 * services
 *
 */
usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
