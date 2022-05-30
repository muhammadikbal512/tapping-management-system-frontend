import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { TerminalIssuerTableService } from 'src/app/modules/services/module-services/terminal-issuer-table.service';

@Component({
  selector: 'app-terminal-list-issuer-table',
  templateUrl: './terminal-list-issuer-table.component.html',
  styleUrls: ['./terminal-list-issuer-table.component.css']
})
export class TerminalListIssuerTableComponent implements OnInit {

  constructor(private terminalTableService: TerminalIssuerTableService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.terminalTableService.GridApi = params;
    this.terminalTableService.GridColumnApi = params;
  }

  onCellClicked(data: RowClickedEvent) {
    
  }

  get animateRow() {
    return this.terminalTableService.animateRow;
  }

  get rowHeight() {
    return this.terminalTableService.rowHeight;
  }

  get headerHeight() {
    return this.terminalTableService.headerHeight;
  }

  get defaultColDef() {
    return this.terminalTableService.defaultColDef;
  }

  get columnDefs() {
    return this.terminalTableService.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.terminalTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.terminalTableService.frameworkComponents;
  }


}
