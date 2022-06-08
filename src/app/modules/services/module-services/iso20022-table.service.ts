import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { ActionButtonIso20022Component } from '../../module/external-interface/iso20022/widgets/action-button-iso20022/action-button-iso20022.component';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root'
})
export class Iso20022TableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    actionButtonGroup: ActionButtonIso20022Component
  };
  defaultColDef: ColDef = {
    flex: 1,
    lockPosition: true,
    sortable: true,
  };
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

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
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

  set GridColumnApi (params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
