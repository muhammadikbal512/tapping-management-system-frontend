import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonAlertAnalysisComponent } from '../../module/investigation/alert-analysis/widgets/action-button-alert-analysis/action-button-alert-analysis.component';


@Injectable({
  providedIn: 'root'
})
export class AlertAnalysisTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonAlertAnalysisComponent,
    overlayLoading: OverlayLoadingComponent
  }
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    editable: false,
    lockPosition: true
  }
  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'alertType'},
    {field: 'destAddress'},
    {field: 'detailsInfo'},
    {field: 'sourceAddress'},
    {field: 'thresHold'},
    {field: 'timeStamp'},
    {field: 'actions', cellRenderer: 'actionButtonGroup'}
  ]

  constructor() { }

  showTableLoading() {
    this.gridApi.showLoadingOverlay()
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  showNoRowdata() {
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
    this.gridApi = params.api
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi
  }
}
