import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { SchemeServiceService } from 'src/app/modules/services/module-services/scheme-service.service';
import { SchemeTableService } from 'src/app/modules/services/module-services/scheme-table.service';

@Component({
  selector: 'app-scheme-table',
  templateUrl: './scheme-table.component.html',
  styleUrls: ['./scheme-table.component.css'],
})
export class SchemeTableComponent implements OnInit {
  constructor(
    private schemeTable: SchemeTableService,
    private schemeService: SchemeServiceService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.schemeTable.gridApi = params.api;
    this.schemeTable.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.schemeTable.showTableLoading();
    this.schemeService.getAllSchemeWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {}

  get animateRow() {
    return this.schemeTable.animateRow;
  }

  get headerHeight() {
    return this.schemeTable.headerHeight;
  }

  get rowHeight() {
    return this.schemeTable.rowHeight;
  }

  get defaultColDef() {
    return this.schemeTable.defaultColDef;
  }

  get columnDefs() {
    return this.schemeTable.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.schemeTable.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.schemeTable.frameworkComponents;
  }
}
