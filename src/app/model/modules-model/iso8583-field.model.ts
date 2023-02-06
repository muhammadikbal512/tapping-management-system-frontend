import { EncodingModel } from './encoding.model';
import { FieldFormatModel } from './field-format.model';
import { IsoConfigurationModel } from './iso-configuration.model';

export class Iso8583Model {
  dialectFields!: Iso8583FieldModel[];
}

export class Iso8583FieldModel {
  id!: number;
  fieldId: string = '';
  priority: number = 0;
  fieldFormat!: FieldFormatModel;
  fieldLength: string = '';
  encoding!: EncodingModel;
  isoConfiguration!: IsoConfigurationModel;
  description: string = '';
  hasChild: boolean = false;
  isoFieldCondition: any = null;
  subFieldConfigurations: Iso8583SubFieldModel[] = []
}

export class Iso8583SubFieldModel {
  id!: number;
  parentFieldId: number = 0 ;
  subFieldId: string = '';
  subFieldFormat!: FieldFormatModel;
  subFieldLength: number = 0;
  tlvTagSize: number = 0;
  description: string = '';
  isTlvFormat: boolean = false;
  priority: number = 0;
  encoding!: EncodingModel;
  isoFieldCondition: any = null;
  common: boolean = false;
}

export class Iso8583TaggedFieldModel {
  fieldId: string = '';
  fieldFormat: string = '';
  tagLenSize: string = '';
}
