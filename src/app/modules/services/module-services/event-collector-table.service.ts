import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonEventCollectorComponent } from '../../module/event-collector/widget/action-button-event-collector/action-button-event-collector.component';

@Injectable({
  providedIn: 'root'
})
export class EventCollectorTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = false;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonEventCollectorComponent,
    overlayLoading: OverlayLoadingComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true
  };
  columnDefs: ColDef[] = [
    {field: 'id' , hide: true},
    {field: 'name'},
    {field: 'description'},
  ]
  constructor() { }

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter((document.getElementById(searchInputClass)as HTMLInputElement)?.value)
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
