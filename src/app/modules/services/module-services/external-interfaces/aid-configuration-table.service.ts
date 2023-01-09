import { Injectable } from '@angular/core';
import { AidConfigurationModel } from 'src/app/model/modules-model/aid-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class AidConfigurationTableService {
  loading: boolean = true;
  aidConfigs!: AidConfigurationModel[];
  cols = [
    { field: 'aid', header: 'AID Number' },
    { field: 'label', header: 'Label' },
  ];
  constructor() {}

  setRowData(data: AidConfigurationModel[]) {
    this.aidConfigs = data;
  }
}
