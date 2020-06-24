import IParseMailTemplateDTO from '../dtos/IParseMailTempleteDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
