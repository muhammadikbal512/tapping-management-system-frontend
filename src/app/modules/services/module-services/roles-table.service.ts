import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonRolesComponent } from '../../module/user-management/roles/widgets/action-button-roles/action-button-roles.component';

@Injectable({
  providedIn: 'root'
})
export class RolesTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonRolesComponent,
    overlayLoading: OverlayLoadingComponent
  }
  defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    sortable: true,
    lockPosition: true
  }
  columnDef: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'roles'},
    {field: 'description'},
    {field: 'actions', cellRenderer: 'actionButtonGroup'}
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

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi
  }
}