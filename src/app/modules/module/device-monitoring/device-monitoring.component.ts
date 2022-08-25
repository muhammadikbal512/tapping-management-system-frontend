import { Component, OnInit } from '@angular/core';
import { DeviceMonitoringTableService } from '../../services/module-services/device-monitoring-table.service';

@Component({
  selector: 'app-device-monitoring',
  templateUrl: './device-monitoring.component.html',
  styleUrls: ['./device-monitoring.component.css'],
})
export class DeviceMonitoringComponent implements OnInit {
  constructor(
    public deviceMonitoringTableService: DeviceMonitoringTableService
  ) {}

  ngOnInit(): void {}
}
