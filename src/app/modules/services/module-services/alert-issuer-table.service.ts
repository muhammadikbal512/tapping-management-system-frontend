import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonAlertIssuerComponent } from '../../module/issuer/alert-issuer/widget/action-button-alert-issuer/action-button-alert-issuer.component';

@Injectable({
  providedIn: 'root'
})
export class AlertIssuerTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonAlertIssuerComponent,
    overlayLoading: OverlayLoadingComponent
  }
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    lockPosition: true,
  }
  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'name'},
    {field: 'description'}
  ]
  constructor() { }

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  setAutoHeightTable() {
    this.gridApi.setDomLayout('autoHeight');
  }

  destroyGrid() {
    this.gridApi.destroy();
  }

  set GridApi (params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
