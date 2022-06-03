import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { UserTagComponent } from '../../global-widget/user-tag/user-tag.component';
import { UserActionButtonComponent } from '../../module/user-management/user/widgets/user-action-button/user-action-button.component';

@Injectable({
  providedIn: 'root'
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
    tag: UserTagComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true
  };

  columnDef: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'username'},
    {field: 'role'},
    {field: 'email'},
    {field: 'firstName', headerName: 'First Name'},
    {field: 'lastName', headerName: 'Last Name'},
    {field: 'active', headerName: 'User Active', cellRenderer: 'tag', maxWidth: 100},
    {field: 'notLocked', headerName: 'User not Locked', maxWidth: 100, cellRenderer:'tag'},
    {field: 'joinDate', headerName: 'Join Date'},
    {field: 'lastLoginDate', headerName: 'Last Login'},
    {field: 'action', cellRenderer: 'actionButtonGroup', sortable: false}
  ]


  constructor() { }

  onFilter(searchInputClass: string) {
    this.gridApi.setQuickFilter((document.getElementById(searchInputClass) as HTMLInputElement)?.value)
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

  set GridcolumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
