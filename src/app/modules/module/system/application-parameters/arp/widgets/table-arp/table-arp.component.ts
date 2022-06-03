import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { AppParametersTableService } from 'src/app/modules/services/module-services/app-parameters-table.service';


@Component({
  selector: 'app-table-arp',
  templateUrl: './table-arp.component.html',
  styleUrls: ['./table-arp.component.css']
})
export class TableArpComponent implements OnInit {

  constructor(private appTableService: AppParametersTableService) { }

  ngOnInit(): void {
  }

  onGridReady(event: GridReadyEvent) {
    
  }

  onCellClicked(data: RowClickedEvent) {

  }

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
