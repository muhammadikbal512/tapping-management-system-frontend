import { Component, OnInit } from '@angular/core';
import { AlertAnalysisTableService } from 'src/app/modules/services/module-services/alert-analysis-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-alert-analysis-table',
  templateUrl: './alert-analysis-table.component.html',
  styleUrls: ['./alert-analysis-table.component.css']
})
export class AlertAnalysisTableComponent implements OnInit {

  constructor(private alertTable: AlertAnalysisTableService) { }

  ngOnInit(): void {
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

}
