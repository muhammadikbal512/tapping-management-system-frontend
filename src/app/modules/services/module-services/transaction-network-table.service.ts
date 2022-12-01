import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { TransactionFlowComponent } from '../../global-widget/transaction-flow/transaction-flow.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionNetworkTableService {
  additionalData: TransactionMessageInterface | undefined;
  additionalEventCollector: EventCollectorInterface | undefined;
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
    flex: 1,
  };

  columnDefs: ColDef[] = [
    {
      field: 'srcAddress',
    },
    { field: 'dstAddress' },
    {
      field: 'dstPort',
    },
    {
      field: 'networkId',
    },
    { field: 'typeMessage' },
    {
      field: 'flag',
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

  setRowData(data: any) {
    this.gridApi.setRowData(data);
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }
}
