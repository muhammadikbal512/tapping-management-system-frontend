import { Component, OnInit } from '@angular/core';
import { DeviceMonitoringInterface } from 'src/app/interface/modules/device-monitoring';
import { DeviceMonitoringTableService } from 'src/app/modules/services/module-services/device-monitoring-table.service';

@Component({
  selector: 'app-table-device-monitoring',
  templateUrl: './table-device-monitoring.component.html',
  styleUrls: ['./table-device-monitoring.component.css'],
})
export class TableDeviceMonitoringComponent implements OnInit {
  deviceMonitorings!: DeviceMonitoringInterface[];
  constructor(
    private deviceMonitoringTableService: DeviceMonitoringTableService,
  ) {}

  ngOnInit(): void {
    this.deviceMonitorings = [
      {
        deviceId: 1,
        deviceType: 'JKT - 04',
        status: 'true',
        lastUpdate: '10/06/2022, 00:18',
        city: 'Jakarta',
        activationDate: '09/06/2022, 10:22',
        remoteAddress: '192.168.2.34',
        port: 8884,
        model: 'Switch'
      },
      {
        deviceId: 2,
        deviceType: 'BGR - 04',
        status: 'false',
        lastUpdate: '20/06/2022, 00:18',
        city: 'Bogor',
        activationDate: '08/06/2022, 10:22',
        remoteAddress: '192.168.2.12',
        port: 8884,
        model: 'PC'
      },
    ];
    this.deviceMonitoringTableService.loading = false;
  }

  onRowSelect(event: any) {
    this.deviceMonitoringTableService.additionalData = event.data
    console.log(event.data)
  }

 

  get cols() {
    return this.deviceMonitoringTableService.cols;
  }

  get loading() {
    return this.deviceMonitoringTableService.loading;
  }
  
}
