import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { TypeActionButtonComponent } from '../../module/user-management/type/widgets/type-action-button/type-action-button.component';


@Injectable({
  providedIn: 'root',
})
export class TypeTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    actionButtonGroup: TypeActionButtonComponent,
  };
  constructor() {}

  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
  };

  columnDef: ColDef[] = [
    { field: 'typeName' },
    { field: 'description' },
    { field: 'actions', cellRenderer: 'actionButtonGroup', maxWidth: 100 },
  ];

  rowData = [
    {
      typeName: 'Administrator',
      description: 'This is Administrator',
    },
    {
      typeName: 'User',
      description: 'This is User',
    },
  ];

  showTableLoading() {
    this.gridApi.showLoadingOverlay();
  }

  hideTableLoading() {
    this.gridApi.hideOverlay();
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }
}
