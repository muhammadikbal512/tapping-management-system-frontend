import { Component, OnInit } from '@angular/core';
import {
  GridReadyEvent,
  RowClassRules,
  RowClickedEvent,
} from 'ag-grid-community';
import { DeviceMonitoringTableService } from 'src/app/modules/services/module-services/device-monitoring-table.service';
import { DeviceMonitoringService } from 'src/app/modules/services/module-services/device-monitoring.service';

@Component({
  selector: 'app-table-device-monitoring',
  templateUrl: './table-device-monitoring.component.html',
  styleUrls: ['./table-device-monitoring.component.css'],
})
export class TableDeviceMonitoringComponent implements OnInit {
  constructor(
    private deviceMonitoringTableService: DeviceMonitoringTableService,
    private deviceMonitoringService: DeviceMonitoringService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.deviceMonitoringTableService.gridApi = params.api;
    this.deviceMonitoringTableService.gridColumnApi = params.columnApi;
  }

  onCellClicked(data: RowClickedEvent) {
    this.deviceMonitoringTableService.additionalData = data.data;
  }

  public rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    },
  };

  get defaultColDef() {
    return this.deviceMonitoringTableService.defaultColDef;
  }

  get animateRows() {
    return this.deviceMonitoringTableService.animateRow;
  }

  get columnDefs() {
    return this.deviceMonitoringTableService.columnDefs;
  }

  get rowData() {
    return this.deviceMonitoringTableService.rowData;
  }

  get rowHeight() {
    return this.deviceMonitoringTableService.rowHeight;
  }

  get headerHeight() {
    return this.deviceMonitoringTableService.headerHeight;
  }

  get frameworkComponents() {
    return this.deviceMonitoringTableService.frameworkComponents;
  }

  get overlayLoadingTemplate() {
    return this.deviceMonitoringTableService.overlayLoadingTemplate;
  }
}
