import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { Iso20022TableService } from 'src/app/modules/services/module-services/iso20022-table.service';


@Component({
  selector: 'app-table-iso20022',
  templateUrl: './table-iso20022.component.html',
  styleUrls: ['./table-iso20022.component.css']
})
export class TableIso20022Component implements OnInit {

  constructor(private isoTableService: Iso20022TableService) { }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {

  }

  onCellClicked(data: RowClickedEvent) {
    
  }

  get animateRow() {
    return this.isoTableService.animateRow;
  }

  get headerHeight() {
    return this.isoTableService.headerHeight;
  }

  get rowHeight() {
    return this.isoTableService.rowHeight;
  }

  get defaultColDef() {
    return this.isoTableService.defaultColDef;
  }

  get columnDefs() {
    return this.isoTableService.columnDefs;
  }

  get overlayLoadingTemplate() {
    return this.isoTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.isoTableService.frameworkComponents;
  }

}
