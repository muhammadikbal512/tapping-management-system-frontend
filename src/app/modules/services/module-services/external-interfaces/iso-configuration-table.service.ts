import { Injectable } from '@angular/core';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class IsoConfigurationTableService {
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];
  loading: boolean = false;
  isoConfigs!: IsoConfigurationModel[];

  constructor() {}

  setRowData(data: IsoConfigurationModel[]) {
    this.isoConfigs = data;
  }
}
