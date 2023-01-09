import { Injectable } from '@angular/core';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';

@Injectable({
  providedIn: 'root',
})
export class MtiConfigurationTableService {
  mtiConfigs!: MtiConfigurationModel[];
  loading: boolean = true;
  constructor() {}

  setRowData(data: MtiConfigurationModel[]) {
    this.mtiConfigs = data;
  }
}
