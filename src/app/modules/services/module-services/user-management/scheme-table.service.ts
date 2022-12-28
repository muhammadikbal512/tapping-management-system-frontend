import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { ActionButtonSchemeComponent } from '../../../module/user-management/private-scheme/widgets/action-button-scheme/action-button-scheme.component';
import { OverlayLoadingComponent } from '../../../global-widget/overlay-loading/overlay-loading.component';
import { SchemeModel } from 'src/app/model/modules-model/scheme.model';

@Injectable({
  providedIn: 'root',
})
export class SchemeTableService {
  loading: boolean = true;
  privateSchemes!: SchemeModel[];
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: any[]) {
    this.privateSchemes = data;
  }
}
