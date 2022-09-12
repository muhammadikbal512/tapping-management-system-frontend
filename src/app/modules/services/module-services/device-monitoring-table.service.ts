import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { DeviceMonitoringInterface } from 'src/app/interface/modules/device-monitoring';
import { DeviceMonitoringTagComponent } from '../../global-widget/device-monitoring-tag/device-monitoring-tag.component';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root',
})
export class DeviceMonitoringTableService {
  additionalData: DeviceMonitoringInterface | undefined;
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    tag: DeviceMonitoringTagComponent,
  };
  defaultColDef: ColDef = {
    sortable: true,
    flex: 1,
  };
  columnDefs: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'deviceId', headerName: 'Device ID' },
    { field: 'deviceType' },
    { field: 'status', cellRenderer: 'tag' },
    { field: 'lastUpdate' },
    { field: 'city', hide: true },
    { field: 'activationDate', hide: true },
    { field: 'remoteAddress', hide: true },
    { field: 'port', hide: true },
    { field: 'model', hide: true },
  ];

  rowData = [
    {
      id: 1,
      deviceId: '1',
      deviceType: 'JKT - 04',
      status: 'true',
      lastUpdate: '10/06/2022, 00:18',
      city: 'Jakarta',
      activationDate: '09/06/2022, 10:22',
      remoteAddress: '192.168.2.34',
      port: '8884',
      model: 'Switch'
    },
    {
      id: 2,
      deviceId: '2',
      deviceType: 'BGR - 04',
      status: 'false',
      lastUpdate: '20/06/2022, 00:18',
      city: 'Bogor',
      activationDate: '08/06/2022, 10:22',
      remoteAddress: '192.168.2.12',
      port: '8884',
      model: 'PC'
    },
  ];

  constructor() {}

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setAutoHeightTable() {
    this.gridApi.setDomLayout('autoHeight');
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  destroyGrid() {
    this.gridApi.destroy();
  }

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
