import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonAlertAnalysisComponent } from '../../module/investigation/alert-analysis/widgets/action-button-alert-analysis/action-button-alert-analysis.component';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    actionButtonGroup: ActionButtonAlertAnalysisComponent,
  };

  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    lockPosition: true,
  };

  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'alertId'},
    {field: 'destAddress'},
    {field: 'detailsInfo'},
    {field: 'sourceAddress'},
    {field: 'thresHold'},
    {field: 'timeStamp'}
  ];

  constructor() {}

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setRowData(data: any) {
    this.gridApi.setRowData(data);
  }

  showNoRowdata() {
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

  set GridColumnApi (params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
