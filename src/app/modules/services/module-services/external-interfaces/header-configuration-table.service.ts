import { Injectable } from '@angular/core';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderConfigurationTableService {
  loading: boolean = true;
  headerConfigs!: HeaderConfigurationModel[];
  cols = [
    { field: 'fieldId', header: 'Field ID' },
    { field: 'description', header: 'Description' },
    { field: 'length', header: 'Length' },
    { field: 'configId', header: 'Config ID' },
    { field: 'priority', header: 'Priority' },
  ];
  constructor() {}

  setRowData(data: HeaderConfigurationModel[]) {
    this.headerConfigs = data;
  }
}
