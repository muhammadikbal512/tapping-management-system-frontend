import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonNdcComponent } from '../../module/external-interface/ndc/widgets/action-button-ndc/action-button-ndc.component';

@Injectable({
  providedIn: 'root',
})
export class NdcTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  headerHeight: number = 40;
  rowHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonNdcComponent,
    overlayLoading: OverlayLoadingComponent,
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

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter(
      (document.getElementById(searchInputClass) as HTMLInputElement).value
    );
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }
}
