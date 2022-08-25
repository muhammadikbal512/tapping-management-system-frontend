import { Injectable } from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';
import { DeviceMonitoringModel } from 'src/app/model/modules-model/device-monitoring.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceMonitoringService {
  existingData: DeviceMonitoringModel = new DeviceMonitoringModel();

  constructor() { }


  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
