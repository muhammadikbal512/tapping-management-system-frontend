import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
<<<<<<< HEAD
import { ActionButtonInstitutionComponent } from '../../module/user-management/institution/widgets/action-button-institution/action-button-institution.component';
=======
import { UserTagLockComponent } from '../../global-widget/user-tag-lock/user-tag-lock.component';
import { UserTagComponent } from '../../global-widget/user-tag/user-tag.component';
import { InstitutionActionButtonComponent } from '../../module/user-management/institution/widgets/institution-action-button/institution-action-button.component';
import { UserActionButtonComponent } from '../../module/user-management/user/widgets/user-action-button/user-action-button.component';
>>>>>>> TMS-FE_Alfat

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
    actionButtonGroup: InstitutionActionButtonComponent
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true,
  };

  columnDef: ColDef[] = [
<<<<<<< HEAD
    { field: 'InstitutionName' },
    { field: 'description' },
    { field: 'actions', cellRenderer: 'actionButtonGroup' },
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
=======
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
>>>>>>> TMS-FE_Alfat
}
