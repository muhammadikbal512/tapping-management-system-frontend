import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { XmlTableService } from 'src/app/modules/services/module-services/xml-table.service';
import { XmlService } from 'src/app/modules/services/module-services/xml.service';

@Component({
  selector: 'app-table-xml',
  templateUrl: './table-xml.component.html',
  styleUrls: ['./table-xml.component.css'],
})
export class TableXmlComponent implements OnInit {
  constructor(
    private xmlTable: XmlTableService,
    private xmlService: XmlService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.xmlTable.gridApi = params.api;
    this.xmlTable.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.xmlTable.showTableLoading();
    this.xmlService.getAllXmlWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {}

  get animateRow() {
    return this.xmlTable.animateRow;
  }

  get headerHeight() {
    return this.xmlTable.headerHeight;
  }

  get rowHeight() {
    return this.xmlTable.rowHeight;
  }

  get defaultColDef() {
    return this.xmlTable.defaultColDef;
  }

  get columnDefs() {
    return this.xmlTable.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.xmlTable.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.xmlTable.frameworkComponents;
  }
}
