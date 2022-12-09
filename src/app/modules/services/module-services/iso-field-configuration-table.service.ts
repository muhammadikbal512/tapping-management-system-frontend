import { Injectable } from '@angular/core';
import { IsoFieldConfigurationModel } from 'src/app/model/modules-model/iso-field-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class IsoFieldConfigurationTableService {
  isoConfigs!: IsoFieldConfigurationModel[];
  loading: boolean = true;
  cols = [
    { field: 'isoFieldId', header: 'Iso Field Id' },
    { field: 'tagNumber', header: 'Tag Number' },
    { field: 'dialectId', header: 'Dialect Id' },
    { field: 'attributeId', header: 'Attribute Id' },
    { field: 'isTagNumber', header: 'isTag Number' },
  ];
  constructor() {}

  setRowData(data: IsoFieldConfigurationModel[]) {
    this.isoConfigs = data;
  }
}
