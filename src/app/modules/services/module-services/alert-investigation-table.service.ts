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
    { field: 'id', hide: true },
    { field: 'alertId' },
    { field: 'destAddress' },
    { field: 'detailsInfo' },
    { field: 'sourceAddress' },
    { field: 'thresHold' },
    { field: 'timeStamp' },
    { field: 'actions', cellRenderer: 'actionButtonGroup' },
  ];

  rowData = [
    {
      alertId: '1',
      destAddress: '192.168.42.3:6767',
      sourceAddress: '192.168.1.7:8809',
      detailsInfo: 'TCP Disconnect',
      thresHold: '1',
      timeStamp: '11:00 AM',
    },
  ];

  constructor() {}

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter(
      (document.getElementById(searchInputClass) as HTMLInputElement)?.value
    );
  }

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

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
