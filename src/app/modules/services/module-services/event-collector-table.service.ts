import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonEventCollectorComponent } from '../../module/event-collector/widget/action-button-event-collector/action-button-event-collector.component';

@Injectable({
  providedIn: 'root',
})
export class EventCollectorTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = false;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonEventCollectorComponent,
    overlayLoading: OverlayLoadingComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
  };
  columnDefs: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'ackNumber' },
    { field: 'dstAddress' },
    { field: 'dstPort' },
    { field: 'flag' },
    { field: 'messageHexa' },
    { field: 'networkId' },
    { field: 'protocol' },
    { field: 'sequenceNumber' },
    { field: 'srcAddress' },
    { field: 'srcPort' },
    { field: 'timestamp' },
    { field: 'typeMessage' },
    { field: 'actions', cellRenderer: 'actionButtonGroup' },
  ];

  rowData = [
    {
      id: 1,
      ackNumber: 123,
      dstAddress: '192.168.2.19',
      dstPort: '4440',
      flag: 'Test',
      messageHexa: 'a20c',
      networkId: 12,
      protocol: 'Test',
      sequenceNumber: 223,
      srcAddress: '192.168.2.40',
      srcPort: '8080',
      timestamp: '10/06/2022, 16:22',
      typeMessage: 'Test'
    },
    {
      id: 2,
      ackNumber: 123,
      dstAddress: '192.168.2.19',
      dstPort: '4440',
      flag: 'Test',
      messageHexa: 'a20c',
      networkId: 12,
      protocol: 'Test',
      sequenceNumber: 223,
      srcAddress: '192.168.2.40',
      srcPort: '8080',
      timestamp: '10/06/2022, 16:22',
      typeMessage: 'Test'
    },
    {
      id: 3,
      ackNumber: 123,
      dstAddress: '192.168.2.19',
      dstPort: '4440',
      flag: 'Test',
      messageHexa: 'a20c',
      networkId: 12,
      protocol: 'Test',
      sequenceNumber: 223,
      srcAddress: '192.168.2.40',
      srcPort: '8080',
      timetamp: '10/06/2022, 16:22',
      typeMessage: 'Test'
    },
  ];
  constructor() {}

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter(
      (document.getElementById(searchInputClass) as HTMLInputElement)?.value
    );
  }

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  setAutoHeightTable() {
    this.gridApi.setDomLayout('autoHeight');
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
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
