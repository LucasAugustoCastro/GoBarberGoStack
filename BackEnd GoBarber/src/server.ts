import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

/**
 * Middlewares que sao expecificos para tratativas de erros,
 * para outros o que difere sao os paramentros, esse middlewares
 * possuem 4 parametros
 */
// app.use((err,request,response,next))
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
