import { Component, OnInit } from '@angular/core';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-iso8583-response-mapping-table',
  templateUrl: './iso8583-response-mapping-table.component.html',
  styleUrls: ['./iso8583-response-mapping-table.component.css'],
})
export class Iso8583ResponseMappingTableComponent implements OnInit {
  constructor(
    private responseService: ResponseMappingService,
    private responseTableService: ResponseMappingTableService
  ) {}

  ngOnInit(): void {}


  onGridReady(params: GridReadyEvent) {

  }

  onCellClicked(params: RowClickedEvent) {
    
  }

  get animateRow() {
    return this.responseTableService.animateRow;
  }

  get headerHeight() {
    return this.responseTableService.headerHeight;
  }

  get rowHeight() {
    return this.responseTableService.rowHeight;
  }

  get columnDefs() {
    return this.responseTableService.columnDef;
  }

  get defaultColDef() {
    return this.responseTableService.defaultColDef;
  }

  get overlayLoadingTemplate() {
    return this.responseTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.responseTableService.frameworkComponents;
  }
}
