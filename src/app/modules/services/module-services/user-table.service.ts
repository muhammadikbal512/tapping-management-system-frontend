import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { UserTagLockComponent } from '../../global-widget/user-tag-lock/user-tag-lock.component';
import { UserTagComponent } from '../../global-widget/user-tag/user-tag.component';
import { UserActionButtonComponent } from '../../module/user-management/user/widgets/user-action-button/user-action-button.component';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: UserActionButtonComponent,
    overlayLoading: OverlayLoadingComponent,
    tag: UserTagComponent,
    lockTag: UserTagLockComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
  };

  columnDef: ColDef[] = [
    { field: 'id', hide: true },
    { field: 'username' },
    { field: 'roleName', headerName: 'Role' },
    { field: 'email' },
    { field: 'typeName' },
    { field: 'institutionName' },
    { field: 'userGroupName' },
    { field: 'active', headerName: 'Status', cellRenderer: 'tag' },
    {
      field: 'lastLoginDate',
      headerName: 'Last Login',
      valueFormatter: this.dateFormatter,
    },
    {
      field: 'action',
      cellRenderer: 'actionButtonGroup',
      sortable: false,
      maxWidth: 100,
    },
  ];

  dateFormatter(params: any) {
    return moment(params.value).format('DD/MM/YYYY HH:mm');
  }

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
    this.gridApi = params.api;
  }

  set GridcolumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
