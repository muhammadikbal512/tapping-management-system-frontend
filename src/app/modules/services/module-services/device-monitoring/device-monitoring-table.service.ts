import { Injectable } from '@angular/core';
import { DeviceMonitoringInterface } from 'src/app/interface/modules/device-monitoring';
import { DeviceMonitoringModel } from 'src/app/model/modules-model/device-monitoring.model';
@Injectable({
  providedIn: 'root',
})
export class DeviceMonitoringTableService {
  deviceMonitorings!: DeviceMonitoringModel[]; 
  additionalData: DeviceMonitoringInterface | undefined;
  loading: boolean = true;
  cols = [
    { field: 'deviceId', header: 'Device Id' },
    { field: 'deviceType', header: 'Device Type' },
    { field: 'deviceId', header: 'Device Id' },
    { field: 'lastUpdate', header: 'last Update' },
  ]

  constructor() {}

  setRowData(data: DeviceMonitoringModel[]) {
    this.deviceMonitorings = data;
  }
}
