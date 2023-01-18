import { IsoConfigurationModel } from "./iso-configuration.model";

export class TransactionTypeModel {
  id!: number;
  transType: number = 0;
  description: string = '';
  isoConfiguration!: IsoConfigurationModel
}
