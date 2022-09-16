import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { UserTagLockComponent } from '../../global-widget/user-tag-lock/user-tag-lock.component';
import { UserTagComponent } from '../../global-widget/user-tag/user-tag.component';
import { UserGroupActionButtonComponent } from '../../module/user-management/user-group/widgets/user-group-action-button/user-group-action-button.component';
import { UserActionButtonComponent } from '../../module/user-management/user/widgets/user-action-button/user-action-button.component';
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
    {field: 'Institutionname'},
    {field: 'description'},
    {field: 'actions', cellRenderer: 'actionButtonGroup'}
  ]

  rowData = [
    {
      Institutionname:"Koi",
      description:"Pusat Penjualan Ikan Terpercaya"
    },
    {
      Institutionname:"ABasdh",
      description:"asdjbakdj"
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
