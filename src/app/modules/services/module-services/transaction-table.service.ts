import { Injectable } from '@angular/core';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridReadyEvent,
  IDetailCellRendererParams,
} from 'ag-grid-community';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import * as moment from 'moment';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';

@Injectable({
  providedIn: 'root',
})
export class TransactionTableService {
  constructor() {}

  additionalData: TransactionMessageInterface | undefined;
  additionalEventCollector: any;
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  paginationSize = 5;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
  };
  defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
  };
  columnDefs: ColDef[] = [
    {
      field: 'timestamp',
    },
    {
      field: 'dstAddress',
      valueGetter: this.destAddress,
    },
    {
      field: 'srcAddress',
      valueGetter: this.sourceAddress,
    },
    { field: 'networkId', cellRenderer: 'agGroupCellRenderer', enableRowGroup: true },
    {
      field: 'typeMessage',
    },
    {
      field: 'status',
    },
    {
      field: 'incidentdetails',
      headerName: 'Incident Details',
    },
  ];

  rowData = [
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '1134',
      typeMessage: '',
      flag: 'SYN',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '1134',
      typeMessage: '',
      flag: 'ACK',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '1134',
      typeMessage: '',
      flag: 'SYN ACK',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '1134',
      typeMessage: '',
      flag: 'ACK',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },


    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '2004',
      typeMessage: '',
      flag: 'SYN',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '2004',
      typeMessage: '',
      flag: 'SYN',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '2004',
      typeMessage: '',
      flag: 'SYN',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
    {
      timestamp: '2022/01/11',
      dstAddress: '192.168.1.10:66048',
      srcAddress: '192.168.1.13:8834',
      networkId: '2004',
      typeMessage: '',
      flag: 'SYN',
      status: '',
      protocol: 'test',
      sequenceNumber: 'test',
      incidentdetails: '',
    },
  ];

  destAddress(params: any) {
    return params.data.dstAddress + ':' + params.data.dstPort;
  }

  sourceAddress(params: any) {
    return params.data.srcAddress + ':' + params.data.srcPort;
  }

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

  setTableAutoHeight() {
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

export function numberParser(params: any) {
  const newValue = params.newValue;
  let valueAsNumber;
  if (newValue === null || newValue === undefined || newValue === '') {
    valueAsNumber = null;
  } else {
    valueAsNumber = parseFloat(params.newValue);
  }
  return valueAsNumber;
}

//Masking HPAN
export function maskHPAN(
  HPAN: string,
  mask: string,
  start: number,
  end: number
) {
  return (
    ('' + HPAN).slice(0, start) +
    ('' + HPAN).slice(start, -end).replace(/./g, mask) +
    ('' + HPAN).slice(-end)
  );
}
