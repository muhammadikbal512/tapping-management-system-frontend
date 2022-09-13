import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { UserTagLockComponent } from '../../global-widget/user-tag-lock/user-tag-lock.component';
import { UserTagComponent } from '../../global-widget/user-tag/user-tag.component';
import { TypeActionButtonComponent } from '../../module/user-management/type/widgets/type-action-button/type-action-button.component';
import { UserActionButtonComponent } from '../../module/user-management/user/widgets/user-action-button/user-action-button.component';

@Injectable({
  providedIn: 'root'
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
    actionButtonGroup: TypeActionButtonComponent
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
}
