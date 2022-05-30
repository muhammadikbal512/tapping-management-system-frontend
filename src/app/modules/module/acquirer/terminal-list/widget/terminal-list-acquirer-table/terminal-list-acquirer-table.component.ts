import { Component, OnInit } from '@angular/core';
import { TerminalListTableService } from 'src/app/modules/services/module-services/terminal-list-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-terminal-list-acquirer-table',
  templateUrl: './terminal-list-acquirer-table.component.html',
  styleUrls: ['./terminal-list-acquirer-table.component.css']
})
export class TerminalListAcquirerTableComponent implements OnInit {

  constructor(private terminalTable: TerminalListTableService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {

  }

  onCellClicked(data: RowClickedEvent) {

  }

  get animateRow() {
    return this.terminalTable.animateRow;
  }

  get headerHeight() {
    return this.terminalTable.headerHeight;
  }

  get rowHeight() {
    return this.terminalTable.rowHeight;
  }

  get defaultColDef() {
    return this.terminalTable.defaultColDef;
  }

  get columnDefs() {
    return this.terminalTable.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.terminalTable.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.terminalTable.frameworkComponents;
  }

}
