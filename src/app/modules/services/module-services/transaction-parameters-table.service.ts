import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { TransactionParamActionButtonComponent } from '../../module/transaction/transaction-parameters/widget/transaction-param-action-button/transaction-param-action-button.component';



@Injectable({
  providedIn: 'root'
})
export class TransactionParametersTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: TransactionParamActionButtonComponent,
    overlayLoading: OverlayLoadingComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
    headerClass: 'transaction-param-header'
  };

  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'attributeName', headerName: 'Attribute Name', sort: 'asc'},
    {field: 'description'},
    {field: 'action', maxWidth: 100, sortable: false, cellRenderer: 'actionButtonGroup'}
  ]



  constructor() { }

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter((document.getElementById(searchInputClass) as HTMLInputElement)?.value)
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
    this.gridApi = params.api
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi
  }
}
