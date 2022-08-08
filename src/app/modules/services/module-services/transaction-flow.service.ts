import { Injectable } from '@angular/core';
import {
  GridApi,
  ColumnApi,
  GridReadyEvent,
  ColDef,
  RowClassRules,
} from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { TransactionFlowComponent } from '../../global-widget/transaction-flow/transaction-flow.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionFlowService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    flow: TransactionFlowComponent,
  };

  defaultColDef: ColDef = {
    sortable: true,
    editable: true,
    flex: 1
  };

  columnDefs: ColDef[] = [
    { field: 'srcHostName' },
    { field: 'dstHostName' },
    { field: 'srcAddress' },
    { field: 'dstAddress' },
    { field: 'time' },
    { field: 'flow', cellRenderer: 'flow', headerName: '', },
    { field: 'description' },
  ];

  rowData = [
    {
      srcHostName: 'ATM',
      dstHostName: 'Switching',
      srcAddress: '192.168.1.78:6767',
      dstAddress: '192.168.1.4:8809',
      time: '0.000 sec',
      flow: 'request',
      description: 'TCP Connect Request - SYN',
    },
    {
      srcHostName: 'Switching',
      dstHostName: 'ATM',
      srcAddress: '192.168.1.4:8809',
      dstAddress: '192.168.1.78:6767',
      time: '0.000 sec',
      flow: 'response',
      description: 'TCP Connect Response - SYN ACK',
    },
    {
      srcHostName: 'ATM',
      dstHostName: 'Switching',
      srcAddress: '192.168.1.78:6767',
      dstAddress: '192.168.1.4:8809',
      time: '0.000 sec',
      flow: 'request',
      description: 'TCP ACK',
    },
    {
      srcHostName: 'ATM',
      dstHostName: 'Switching',
      srcAddress: '192.168.1.78:6767',
      dstAddress: '192.168.1.4:8809',
      time: '0.000 sec',
      flow: 'request',
      description: 'Transaction Request PSH ACK',
    },
    {
      srcHostName: 'Switching',
      dstHostName: 'HSM',
      srcAddress: '192.168.1.4:8809',
      dstAddress: '192.168.1.5:8809',
      time: '0.000 sec',
      flow: 'request',
      description: 'TCP Connect Request - SYN',
    },
    {
      srcHostName: 'HSM',
      dstHostName: 'Switching',
      srcAddress: '192.168.1.5:8809',
      dstAddress: '192.168.1.4:8809',
      time: '0.000 sec',
      flow: 'response',
      description: 'TCP Connect Response - SYN ACK',
    },
    {
      srcHostName: 'Switching',
      dstHostName: 'HSM',
      srcAddress: '192.168.1.4:8809',
      dstAddress: '192.168.1.5:8809',
      time: '0.000 sec',
      flow: 'request',
      description: 'TCP ACK',
    },
    {
      srcHostName: 'Switching',
      dstHostName: 'HSM',
      srcAddress: '192.168.1.4:8809',
      dstAddress: '192.168.1.5:8809',
      time: '0.000 sec',
      flow: 'request',
      description: 'Transaction Request PSH ACK',
    },
    {
      srcHostName: 'HSM',
      dstHostName: 'Switching',
      srcAddress: '192.168.1.5:8809',
      dstAddress: '192.168.1.4:8809',
      time: '0.000 sec',
      flow: 'response',
      description: 'TCP ACK',
    },
    {
      srcHostName: 'HSM',
      dstHostName: 'Switching',
      srcAddress: '192.168.1.5:8809',
      dstAddress: '192.168.1.4:8809',
      time: '0.000 sec',
      flow: 'response',
      description: 'Transaction Response PSH ACK',
    },
    {
      srcHostName: 'Switching',
      dstHostName: 'ATM',
      srcAddress: '192.168.1.4:8809',
      dstAddress: '192.168.1.78:6767',
      time: '0.000 sec',
      flow: 'response',
      description: 'TCP ACK',
    },
    {
      srcHostName: 'Switching',
      dstHostName: 'ATM',
      srcAddress: '192.168.1.4:8809',
      dstAddress: '192.168.1.78:6767',
      time: '0.000 sec',
      flow: 'response',
      description: 'Transaction Response PSH ACK',
    },
  ];

  constructor() {}

  showTableLoading() {
    return this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    return this.gridApi.hideOverlay();
  }

  setTableAutoHeight() {
    return this.gridApi.setDomLayout('autoHeight');
  }

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
