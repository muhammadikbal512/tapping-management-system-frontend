import { Injectable } from '@angular/core';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';

@Injectable({
  providedIn: 'root'
})
export class InstitutionTableService {

  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    overlayLoading: OverlayLoadingComponent,
  };
  defaultColDef: ColDef = {
    flex: 1,
    editable: false,
    sortable: true,
    lockPosition: true
  };

  columnDef: ColDef[] = [
    {field: 'InstitutionName'},
    {field: 'description'},
    {field: 'Actions'}
  ]

  rowData = [
    {
      Institutionname:"ABasdh",
      description:"asdjbakdj"
    },
    {
      Institutionname:"ABasdh",
      description:"asdjbakdj"
    }
  ]
  constructor() { }
}
