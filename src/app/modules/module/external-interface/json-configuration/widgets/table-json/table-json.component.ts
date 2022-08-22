import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { JsonConfigurationTableService } from 'src/app/modules/services/module-services/json-configuration-table.service';
import { JsonConfigurationService } from 'src/app/modules/services/module-services/json-configuration.service';

@Component({
  selector: 'app-table-json',
  templateUrl: './table-json.component.html',
  styleUrls: ['./table-json.component.css'],
})
export class TableJsonComponent implements OnInit {
  constructor(
    private jsonTableService: JsonConfigurationTableService,
    private jsonService: JsonConfigurationService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.jsonTableService.gridApi = params.api;
    this.jsonTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.jsonTableService.showTableLoading();
    this.jsonService.getAllJsonConfigWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {}

  get animateRow() {
    return this.jsonTableService.animateRow;
  }

  get headerHeight() {
    return this.jsonTableService.headerHeight;
  }

  get rowHeight() {
    return this.jsonTableService.rowHeight;
  }

  get defaultColDef() {
    return this.jsonTableService.defaultColDef;
  }

  get columnDefs() {
    return this.jsonTableService.columnDefs;
  }

  get frameworkComponents() {
    return this.jsonTableService.frameworkComponents;
  }

  get overlayLoadingTemplate() {
    return this.jsonTableService.overlayLoadingTemplate;
  }
}
