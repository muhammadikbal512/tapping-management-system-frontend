import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping-table',
  templateUrl: './iso8583-response-mapping-table.component.html',
  styleUrls: ['./iso8583-response-mapping-table.component.css'],
})
export class Iso8583ResponseMappingTableComponent implements OnInit {
  constructor(
    private responseTableService: ResponseMappingTableService,
    private responseService: ResponseMappingService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.responseTableService.gridApi = params.api;
    this.responseTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.responseTableService.showTableLoading();
    this.responseService.getResponseMappingWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {
    this.responseService.ExistingData = data.data;
  }

  get animateRow() {
    return this.responseTableService.animateRow;
  }

  get rowHeight() {
    return this.responseTableService.rowHeight;
  }

  get headerHeight() {
    return this.responseTableService.headerHeight;
  }

  get defaultColDef() {
    return this.responseTableService.defaultColDef;
  }

  get columnDef() {
    return this.responseTableService.columnDef;
  }

  get overlayLoadingTemplate() {
    return this.responseTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.responseTableService.frameworkComponents;
  }
}
