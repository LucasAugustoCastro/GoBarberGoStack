import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

/**
 * Middlewares que sao expecificos para tratativas de erros,
 * para outros o que difere sao os paramentros, esse middlewares
 * possuem 4 parametros
 */
// app.use((err,request,response,next))

app.use(errors());
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // caso seja um erro gerado pela minha aplicaçao entrao no if
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(3333, () => {
  console.log('🍺 Server starterd on port 3333! 🍺');
});
