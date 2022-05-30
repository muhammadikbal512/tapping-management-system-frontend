import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { TerminalListAcquirerActionButtonComponent } from '../../module/acquirer/terminal-list/widget/terminal-list-acquirer-action-button/terminal-list-acquirer-action-button.component';


@Injectable({
  providedIn: 'root'
})
export class TerminalListTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: TerminalListAcquirerActionButtonComponent,
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

  set GridApi (params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi (params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }

}
