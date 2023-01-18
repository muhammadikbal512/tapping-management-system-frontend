import { EncodingModel } from './encoding.model';
import { FieldFormatModel } from './field-format.model';
import { IsoConfigurationModel } from './iso-configuration.model';

export class HeaderConfigurationModel {
  id!: number;
  headerField: number = 0;
  headerLength: number = 0;
  description: string = '';
  fieldFormat!: FieldFormatModel;
  encoding!: EncodingModel;
  isofieldCondition: any = null;
  isoConfiguration!: IsoConfigurationModel;
  priority: number = 0;
}
