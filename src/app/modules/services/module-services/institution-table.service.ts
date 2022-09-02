import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonInstitutionComponent } from '../../module/user-management/institution/widgets/action-button-institution/action-button-institution.component';

@Injectable({
  providedIn: 'root',
})
export class InstitutionTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonInstitutionComponent,
    overlayLoading: OverlayLoadingComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
  };

  columnDef: ColDef[] = [
    { field: 'InstitutionName' },
    { field: 'description' },
    { field: 'actions', cellRenderer: 'actionButtonGroup' },
  ];

  rowData = [
    {
      InstitutionName: 'Divisi A',
      description: 'Divisi 1',
    },
    {
      InstitutionName: 'Divisi B',
      description: 'Divisi 2',
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

  setRowData(data: any[]) {
    this.gridApi.setRowData(data);
  }

  showNoRowData() {
    this.gridApi.showNoRowsOverlay();
  }
}
