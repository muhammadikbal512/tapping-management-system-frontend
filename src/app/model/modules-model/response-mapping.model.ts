import { IsoConfigurationModel } from "./iso-configuration.model";

export class ResponseMappingModel {
  id!: number;
  respCode: string = '';
  description: string = '';
  isoConfiguration!: IsoConfigurationModel
}
