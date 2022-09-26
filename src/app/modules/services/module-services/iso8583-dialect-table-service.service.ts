import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonGroupIso8583DialectComponent } from '../../module/external-interface/iso8583configuration/iso8583-dialect/widget/action-button-group-iso8583-dialect/action-button-group-iso8583-dialect.component';

@Injectable({
  providedIn: 'root',
})
export class Iso8583DialectTableServiceService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonGroupIso8583DialectComponent,
    overlayLoading: OverlayLoadingComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
    headerClass: 'iso8583Dialect-header-color',
  };
  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'nameType', sort: 'asc'},
    {field: 'messageFormat.messageFormat', headerName: 'Message Format'},
    {field: 'description', width: 100},
    {field: 'actions', maxWidth: 100 , cellRenderer:'actionButtonGroup'}
  ]
  
  constructor() {}

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter((document.getElementById(searchInputClass) as HTMLInputElement)?.value);
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

  setRowData(data: any[]) {
    this.gridApi.setRowData(data)
  }

  setAutoHeightTable() {
    this.gridApi.setDomLayout('autoHeight')
  }

  destroyGrid() {
    this.gridApi.destroy();
  }

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi
  }
}
