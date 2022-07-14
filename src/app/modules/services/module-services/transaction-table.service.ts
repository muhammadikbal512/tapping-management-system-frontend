import { Injectable } from '@angular/core';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridReadyEvent,
  IDetailCellRendererParams,
} from 'ag-grid-community';
import { ColumnListTransactionInterface } from 'src/app/interface/modules/column-list-transaction';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionTableService {
  constructor() {}

  additionalData: TransactionMessageInterface | undefined;
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  paginationSize = 5;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    maxWidth: 110,
    editable: true,
    resizable: true,
    filter: true
  };
  columnDefs: ColDef[] = [
    {
      field: 'transactionDate',
      sortable: true,
      sort: 'desc',
      minWidth: 200,
      maxWidth: 300,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'networkDate',
      sortable: true,
      minWidth: 200,
      maxWidth: 300,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'mti',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      headerName: 'MTI'
    },
    {
      field: 'hpan',
      sortable: true,
      minWidth: 180,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      cellRenderer: 'medalCellRenderer',
      headerName: 'HPAN'
    },
    {
      field: 'terminalId',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'merchantId',
      cellRenderer: 'agGroupCellRenderer',
      sortable: true,
      minWidth: 200,
      maxWidth: 230,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'merchantType',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'countryCode',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'amount',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'responseCode',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      valueParser: numberParser,
      headerClass: 'transaction-header-color',
      cellClassRules: {
        'rag-red': 'x != 00',
      },
      filter: true
    },
    {
      field: 'transactionId',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'networkId',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      filter: true
    },
    {
      field: 'rrn',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      headerName: 'RRN'
    },
    {
      field: 'location',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'messageAscii',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'messageHexa',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'posDataCode',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'sequenceNumber',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
    {
      field: 'sourceAccount',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
      headerName: 'srcAccount'
    },
    {
      field: 'destAccount',
      sortable: true,
      minWidth: 150,
      maxWidth: 200,
      headerClass: 'transaction-header-color',
    },
  ];

  rowData = [
    {
      transactionDate: '',
      networkDate: '',
      mti: '112',
      hpan: '221',
      terminalId: 1,
      merchantId: 1,
      merchantType: 'BCA',
      countryCode: 1,
      amount: '100.000',
      responseCode: '06',
      transactionId: 1,
      networkId: 1,
      rrn: 1234,
      location: 'indonesia',
      messageAscii: 'aaasdd',
      messageHexa: 'aasddq',
      posDataCode: 123,
      sequenceNumber: 443,
      sourceAccount: '192.168.1.7:8809',
      destAccount: '192.168.42.3:6767'
    },

    {
      transactionDate: '',
      networkDate: '',
      mti: '113',
      hpan: '224',
      terminalId: 2,
      merchantId: 2,
      merchantType: 'BTN',
      countryCode: 1,
      amount: '300.000',
      responseCode: '00',
      transactionId: 1,
      networkId: 1,
      rrn: 1234,
      location: 'indonesia',
      messageAscii: 'aaa112sdd',
      messageHexa: '3321aa',
      posDataCode: 112,
      sequenceNumber: 223,
      sourceAccount: '192.168.4.48:8809',
      destAccount: '192.168.42.3:6767'
    },
    {
      transactionDate: '',
      networkDate: '',
      mti: '113',
      hpan: '224',
      terminalId: 3,
      merchantId: 3,
      merchantType: 'Mandiri',
      countryCode: 1,
      amount: '500.000',
      responseCode: '09',
      transactionId: 3,
      networkId: 3,
      rrn: 4332,
      location: 'indonesia',
      messageAscii: 'aaa112sdd',
      messageHexa: '3321aa',
      posDataCode: 115,
      sequenceNumber: 443,
      sourceAccount: '192.168.6.18:8809',
      destAccount: '192.168.42.3:6767'
    }
  ]

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
