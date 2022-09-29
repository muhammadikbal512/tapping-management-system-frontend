import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonArpComponent } from '../../module/system/application-parameters/arp/widgets/action-button-arp/action-button-arp.component';

@Injectable({
  providedIn: 'root',
})
export class AppParametersTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    lockPosition: true,
  };
  columnDefs: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'nameSettings' },
    { field: 'value' },
    { field: 'actions' },
  ];
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonArpComponent,
    overlayLoading: OverlayLoadingComponent,
  };
  constructor() {}

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  setAutoHeightTable() {
    this.gridApi.setDomLayout('autoHeight');
  }

  SetRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  ShowNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter(
      (document.getElementById(searchInputClass) as HTMLInputElement).value
    );
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
