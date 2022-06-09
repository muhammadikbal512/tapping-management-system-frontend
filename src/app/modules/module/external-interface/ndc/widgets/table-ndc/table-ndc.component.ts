import { Component, OnInit } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { NdcTableService } from 'src/app/modules/services/module-services/ndc-table.service';



@Component({
  selector: 'app-table-ndc',
  templateUrl: './table-ndc.component.html',
  styleUrls: ['./table-ndc.component.css']
})
export class TableNdcComponent implements OnInit {

  constructor(private ndcTableService: NdcTableService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    
  }

  get animateRow() {
    return this.ndcTableService.animateRow;
  }

  get headerHeight() {
    return this.ndcTableService.headerHeight;
  }

  get rowHeight() {
    return this.ndcTableService.rowHeight;
  }

  get defaultColDef() {
    return this.ndcTableService.defaultColDef;
  }

  get columnDefs() {
    return this.ndcTableService.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.ndcTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.ndcTableService.frameworkComponents;
  }

}
