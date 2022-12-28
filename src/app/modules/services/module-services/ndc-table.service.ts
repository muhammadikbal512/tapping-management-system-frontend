import { Injectable } from '@angular/core';
import { ColDef, GridApi, ColumnApi, GridReadyEvent } from 'ag-grid-community';
import { NdcModel } from 'src/app/model/modules-model/ndc.model';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonNdcComponent } from '../../module/external-interface/ndc/widgets/action-button-ndc/action-button-ndc.component';

@Injectable({
  providedIn: 'root',
})
export class NdcTableService {
  ndcs!: NdcModel[];
  loading: boolean = true;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: NdcModel[]) {
    this.ndcs = data;
  }
}
