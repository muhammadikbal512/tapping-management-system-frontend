import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';
import { DeviceMonitoringInterface } from 'src/app/interface/modules/device-monitoring';
import { DeviceMonitoringModel } from 'src/app/model/modules-model/device-monitoring.model';
import { DeviceMonitoringDispatch } from 'src/app/state-configuration/modules/device-monitoring/device-monitoring.dispatch';
import { environment } from 'src/environments/environment';
import { DeviceMonitoringTableService } from './device-monitoring-table.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceMonitoringService {
  buttonStatus: string | undefined;
  openDialog() {
    throw new Error('Method not implemented.');
  }
  private apiUrl: string = environment.core236;
  existingData!: DeviceMonitoringInterface[]

  constructor(
    private http: HttpClient,
    private deviceTableService: DeviceMonitoringTableService,
    private deviceDispatch: DeviceMonitoringDispatch
  ) {}

  getAllDeviceMonitoring() {
    return this.http.get<DeviceMonitoringModel[]>(`${this.apiUrl}/devicemonitoring/list`)
  }

  getAllDeviceMonitoringWithDelay() {
    setTimeout(() => {
      this.onGetDeviceMonitoring();
    }, 500);
  }

  onGetDeviceMonitoring() {
    this.deviceDispatch._DeviceMonitoringGetDispatch();
  }


  set ExistingData(data: DeviceMonitoringInterface[]) {
    this.existingData = data;
  }
}