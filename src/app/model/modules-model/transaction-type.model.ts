import { IsoConfigurationModel } from "./iso-configuration.model";

export class TransactionTypeModel {
  id!: number;
  transType: string = '';
  description: string = '';
  isoConfiguration!: IsoConfigurationModel
}
