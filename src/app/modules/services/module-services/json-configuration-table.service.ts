import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { ActionButtonJsonComponent } from '../../module/external-interface/json-configuration/widgets/action-button-json/action-button-json.component';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root',
})
export class JsonConfigurationTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonJsonComponent,
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
      (document.getElementById(searchInputClass) as HTMLInputElement)?.value
    );
  }

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }
}
