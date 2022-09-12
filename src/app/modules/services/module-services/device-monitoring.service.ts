import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RowClickedEvent } from 'ag-grid-community';
import { DeviceMonitoringModel } from 'src/app/model/modules-model/device-monitoring.model';
import { DeviceMonitoringDispatch } from 'src/app/state-configuration/modules/device-monitoring/device-monitoring.dispatch';
import { environment } from 'src/environments/environment';
import { DeviceMonitoringTableService } from './device-monitoring-table.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceMonitoringService {
  private apiUrl: string = environment.core236;
  existingData: DeviceMonitoringModel = new DeviceMonitoringModel();

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
    this.deviceTableService.showTableLoading();
    this.deviceDispatch._DeviceMonitoringGetDispatch();
  }


  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
