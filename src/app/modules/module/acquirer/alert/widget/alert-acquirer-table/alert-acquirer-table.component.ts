import { Component, OnInit } from '@angular/core';
import { AlertAcquirerTableService } from 'src/app/modules/services/module-services/alert-acquirer-table.service';
import { GridReadyEvent, RowClassRules, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-alert-acquirer-table',
  templateUrl: './alert-acquirer-table.component.html',
  styleUrls: ['./alert-acquirer-table.component.css']
})
export class AlertAcquirerTableComponent implements OnInit {

  constructor(private alertTable: AlertAcquirerTableService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {

  }

  onCellClicked(data: RowClickedEvent) {

  }

  public RowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0
    }
  }

  get animateRow() {
    return this.alertTable.animateRow;
  }

  get headerHeight() {
    return this.alertTable.headerHeight;
  }

  get rowHeight() {
    return this.alertTable.rowHeight;
  }

  get defaultColDef() {
    return this.alertTable.defaultColDef;
  }

  get columnDefs() {
    return this.alertTable.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.alertTable.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.alertTable.frameworkComponents;
  }

}
