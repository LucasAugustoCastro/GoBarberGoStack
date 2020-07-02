import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailTemplatesProvider from './implementations/HandlebarsMailTemplatesProvider';

const providers = {
  handlebars: HandlebarsMailTemplatesProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
