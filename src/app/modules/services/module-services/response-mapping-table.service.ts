import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { Iso8583ResponseMappingActionButtonComponent } from '../../module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-action-button/iso8583-response-mapping-action-button.component';

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'loading';
  frameworkComponents = {
    actionButtonGroup: Iso8583ResponseMappingActionButtonComponent,
    overlayLoading: OverlayLoadingComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
  };
  columnDef: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'name' },
    { field: 'description' },
    { field: 'actions', cellRenderer: 'actionButtonGroup' },
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

  showNorowData() {
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
    this.gridApi = params.api;
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
