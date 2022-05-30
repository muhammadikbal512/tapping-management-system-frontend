import { Component, OnInit } from '@angular/core';
import { AlertIssuerTableService } from 'src/app/modules/services/module-services/alert-issuer-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';


@Component({
  selector: 'app-alert-issuer-table',
  templateUrl: './alert-issuer-table.component.html',
  styleUrls: ['./alert-issuer-table.component.css']
})
export class AlertIssuerTableComponent implements OnInit {

  constructor(private alertTableService: AlertIssuerTableService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.alertTableService.GridApi = params;
    this.alertTableService.GridColumnApi = params;
    this.runService()
  }

  onCellClicked(data: RowClickedEvent) {
    this.alertTableService
  }

  runService() {

  }

  get animateRow() {
    return this.alertTableService.animateRow;
  }

  get headerHeight() {
    return this.alertTableService.headerHeight;
  }

  get rowHeight() {
    return this.alertTableService.rowHeight;
  }

  get defaultColDef() {
    return this.alertTableService.defaultColDef;
  }

  get columnDefs() {
    return this.alertTableService.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.alertTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.alertTableService.frameworkComponents;
  }

}
