import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonIso8583FieldConfigurationComponent } from '../../module/external-interface/iso8583configuration/iso8583-field-configuration/widget/action-button-iso8583-field-configuration/action-button-iso8583-field-configuration.component';
import { TagComponent } from '../../global-widget/tag/tag.component';

@Injectable({
  providedIn: 'root'
})
export class IsoFieldConfigurationTableService {
  gridApi!: GridApi;
  gridColumnApi!: ColumnApi;
  animateRow: boolean = true;
  rowHeight: number = 40;
  headerHeight: number = 40;
  overlayLoadingTemplate: string = 'overlayLoading';
  frameworkComponents = {
    actionButtonGroup: ActionButtonIso8583FieldConfigurationComponent,
    overlayLoading: OverlayLoadingComponent,
    tag: TagComponent
  }
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 110,
    editable: false,
    sortable: true,
    headerClass: 'iso8583-field-header'
  }
  columnDefs: ColDef[] = [
    {field: 'id', hide: true},
    {field: 'isoFieldId', sort: 'asc'},
    {field: 'tagNumber'},
    {field: 'dialectId'},
    {field: 'attributeId'},
    {field: 'isTagNumber', cellRenderer: 'tag'},
    {field: 'actions', cellRenderer:'actionButtonGroup'}
  ]
  constructor() { }

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

  set GridColumnApi(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }

}
