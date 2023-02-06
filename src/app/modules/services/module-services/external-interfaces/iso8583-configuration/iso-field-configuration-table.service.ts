import { Injectable } from '@angular/core';
import {
  Iso8583FieldModel,
  Iso8583SubFieldModel,
} from 'src/app/model/modules-model/iso8583-field.model';

@Injectable({
  providedIn: 'root',
})
export class IsoFieldConfigurationTableService {
  isoConfigs!: Iso8583FieldModel[];
  subFields!: Iso8583SubFieldModel[];
  loading: boolean = true;
  cols = [
    { field: 'fieldId', header: 'Field ID' },
    { field: 'description', header: 'Description' },
    { field: 'fieldLength', header: 'Length' },
    { field: 'priority', header: 'Priority' },
  ];

  subfieldCols = [
    { field: 'description', header: 'Description' },
    { field: 'isoFieldCondition', header: 'isoFieldCondition' },
    { field: 'parentFieldId', header: 'Parent Field ID' },
    { field: 'subFieldId', header: 'Sub Field ID' },
    { field: 'subFieldLength', header: 'Sub Field Length' },
    { field: 'tlvTagSize', header: 'Tlv Tag Size' },
  ];
  constructor() {}

  setRowData(data: Iso8583FieldModel[]) {
    this.isoConfigs = data;
  }

  setSubFieldData(data: Iso8583SubFieldModel[]) {
    this.subFields = data;
  }
}
