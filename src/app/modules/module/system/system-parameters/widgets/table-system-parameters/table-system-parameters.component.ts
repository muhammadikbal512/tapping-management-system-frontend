import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { SystemParametersTableService } from 'src/app/modules/services/module-services/system-parameters-table.service';


@Component({
  selector: 'app-table-system-parameters',
  templateUrl: './table-system-parameters.component.html',
  styleUrls: ['./table-system-parameters.component.css']
})
export class TableSystemParametersComponent implements OnInit {

  constructor(private systemService: SystemParametersTableService) { }

  ngOnInit(): void {
  }

  onGridReady(event: GridReadyEvent) {

  }

  onCellClicked(data: RowClickedEvent) {

  }

  get animateRow() {
    return this.systemService.animateRow;
  }

  get defaultColDef() {
    return this.systemService.defaultColDef;
  }

  get columnDefs() {
    return this.systemService.columnDefs;
  }

  get rowHeight() {
    return this.systemService.rowHeight;
  }

  get headerHeight() {
    return this.systemService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.systemService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.systemService.frameworkComponents;
  }

}
