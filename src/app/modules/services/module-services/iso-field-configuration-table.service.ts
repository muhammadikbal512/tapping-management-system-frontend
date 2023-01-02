import { Injectable } from '@angular/core';
import { IsoFieldConfigurationModel } from 'src/app/model/modules-model/iso-field-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class IsoFieldConfigurationTableService {
  isoConfigs!: IsoFieldConfigurationModel[];
  loading: boolean = true;
  cols = [
    { field: 'fieldId', header: 'Field ID' },
    { field: 'description', header: 'Description' },
    { field: 'length', header: 'Length' },
    { field: 'hasChild', header: 'Has Child' },
    { field: 'configId', header: 'Config ID' },
    { field: 'priority', header: 'Priority' },
  ];
  constructor() {}

  setRowData(data: IsoFieldConfigurationModel[]) {
    this.isoConfigs = data;
  }
}
