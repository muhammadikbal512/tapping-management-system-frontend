import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonXmlComponent } from '../../module/external-interface/xml-configuration/widgets/action-button-xml/action-button-xml.component';

@Injectable({
  providedIn: 'root',
})
export class XmlTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    actionButtonGroup: ActionButtonXmlComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    lockPosition: true,
  };
  columnDefs: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'name' },
    { field: 'description' },
  ];
  constructor() {}

  onFilter() {
    this.gridApi.setQuickFilter(
      (document.getElementById('search-input') as HTMLInputElement)?.value
    );
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

  set GridApi(params: GridReadyEvent) {
    this.gridApi = params.api
  }

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
