import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/alert-investigation-table.service';

@Component({
  selector: 'app-alert-analysis-table',
  templateUrl: './alert-analysis-table.component.html',
  styleUrls: ['./alert-analysis-table.component.css']
})
export class AlertAnalysisTableComponent implements OnInit {

  constructor(private alertTable: AlertInvestigationTableService) { }

  ngOnInit(): void {
    console.log(this.rowData)
  }

  onGridReady(params: GridReadyEvent) {

  }

  onCellClicked(params: RowClickedEvent) {
    
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

  get rowData() {
    return this.alertTable.rowData;
  }

}
