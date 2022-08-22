import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { AppParametersTableService } from 'src/app/modules/services/module-services/app-parameters-table.service';
import { AppParametersService } from 'src/app/modules/services/module-services/app-parameters.service';

@Component({
  selector: 'app-table-arp',
  templateUrl: './table-arp.component.html',
  styleUrls: ['./table-arp.component.css'],
})
export class TableArpComponent implements OnInit {
  constructor(
    private appTableService: AppParametersTableService,
    private appService: AppParametersService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.appTableService.gridApi = params.api;
    this.appTableService.gridColumnApi = params.columnApi;
    this.runeService();
  }

  runeService() {
    this.appTableService.showTableLoading();
    this.appService.getArpAllWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {}

  get animateRow() {
    return this.appTableService.animateRow;
  }

  get headerHeight() {
    return this.appTableService.headerHeight;
  }

  get rowHeight() {
    return this.appTableService.rowHeight;
  }

  get defaultColDef() {
    return this.appTableService.defaultColDef;
  }

  get columnDefs() {
    return this.appTableService.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.appTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.appTableService.frameworkComponents;
  }
}
