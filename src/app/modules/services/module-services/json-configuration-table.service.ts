import { Injectable } from '@angular/core';
import { JsonConfigModel } from 'src/app/model/modules-model/json-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class JsonConfigurationTableService {
  jsonConfigs!: JsonConfigModel[];
  loading: boolean = true;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: JsonConfigModel[]) {
    this.jsonConfigs = data;
  }
}
