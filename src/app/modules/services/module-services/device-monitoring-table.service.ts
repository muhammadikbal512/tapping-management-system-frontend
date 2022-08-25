import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { DeviceMonitoringInterface } from 'src/app/interface/modules/device-monitoring';
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
  };
  defaultColDef: ColDef = {
    sortable: true,
    flex: 1,
  };
  columnDefs: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'deviceId', headerName: 'Device ID' },
    { field: 'deviceType' },
    { field: 'status' },
    { field: 'lastUpdate' },
  ];

  rowData = [
    {
      id: 1,
      deviceId: 'Jakarta',
      deviceType: 'JKT - 04',
      status: 'active',
      lastUpdate: '10/06/2022, 00:18',
    },
    {
      id: 2,
      deviceId: 'Bogor',
      deviceType: 'BGR - 04',
      status: 'active',
      lastUpdate: '20/06/2022, 00:18',
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

  setRowData(data: []) {
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
