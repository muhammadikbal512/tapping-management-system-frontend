import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonTerminalListIssuerComponent } from '../../module/issuer/terminal-list/widget/action-button-terminal-list-issuer/action-button-terminal-list-issuer.component';

@Injectable({
  providedIn: 'root'
})
export class TerminalIssuerTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate: string = 'Loading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonTerminalListIssuerComponent,
    overlayLoading: OverlayLoadingComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    lockPosition: true
  };
  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'name'},
    {field: 'description'}
  ]
  constructor() { }

  showTableLoading() {
    this.gridApi.showLoadingOverlay()
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setAutoHeightTable() {
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

  set GridApi (params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi (params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
