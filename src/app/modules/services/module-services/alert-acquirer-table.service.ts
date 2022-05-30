import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonAcquirerAlertComponent } from '../../module/acquirer/alert/widget/action-button-acquirer-alert/action-button-acquirer-alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertAcquirerTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'loadingOverlay';
  frameworkComponents = {
    actionButtonGroup: ActionButtonAcquirerAlertComponent,
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
  constructor() {}


  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  showNorowData() {
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
