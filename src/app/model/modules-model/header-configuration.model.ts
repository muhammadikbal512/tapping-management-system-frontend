import { IsoConfigurationModel } from "./iso-configuration.model";

export class HeaderConfigurationModel {
  id!: number;
  headerField: number = 0;
  headerLength: number = 0;
  description: string = '';
  fieldFormat: number = 0;
  encoding: number = 0;
  isofieldCondition: number = 0;
  isoConfiguration!: IsoConfigurationModel
  priority: string = '';
}
