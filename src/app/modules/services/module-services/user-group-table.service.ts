import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { UserGroupActionButtonComponent } from '../../module/user-management/user-group/widgets/user-group-action-button/user-group-action-button.component';

@Injectable({
  providedIn: 'root'
})
export class UserGroupTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
    actionButtonGroup: UserGroupActionButtonComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true
  };

  columnDef: ColDef[] = [
    {field: 'groupName'},
    {field: 'actions', cellRenderer: 'actionButtonGroup', maxWidth: 100}
  ]

  rowData = [
    {
      groupName:"Group A",
    },
    {
      groupName: "Group B"
    }
  ]

  constructor() { }
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
