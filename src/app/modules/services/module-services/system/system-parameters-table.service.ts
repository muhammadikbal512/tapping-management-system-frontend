import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonSystemParametersComponent } from '../../../module/system/system-parameters/widgets/action-button-system-parameters/action-button-system-parameters.component';



@Injectable({
  providedIn: 'root'
})
export class SystemParametersTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonSystemParametersComponent,
    overlayLoading: OverlayLoadingComponent
  }
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    lockPosition: true
  }
  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'name'},
    {field: 'description'},
    {field: 'action', cellRenderer: 'actionButtonGroup'}
  ]
  constructor() { }

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
    this.gridApi.setRowData(data)
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  set GridApi (params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi (params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi
  }
}
