import { Component, OnInit } from '@angular/core';
import { RowClassRules, RowClickedEvent } from 'ag-grid-community';
import { TypeTableService } from 'src/app/modules/services/module-services/type-table.service';

@Component({
  selector: 'app-table-type',
  templateUrl: './table-type.component.html',
  styleUrls: ['./table-type.component.css']
})
export class TableTypeComponent implements OnInit {

  constructor(
    private typeTableService: TypeTableService
  ) {}

  public rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    }
  }

  ngOnInit(): void {}

  // onGridReady(params: GridReadyEvent) {
  //   this.instutitionTableService.gridApi = params.api;
  //   this.instutitionTableService.gridColumnApi = params.columnApi;
  // }

  onCellClicked(data: RowClickedEvent) {
  }

  get animateRow() {
    return this.typeTableService.animateRow;
  }

  get columnDefs() {
    return this.typeTableService.columnDef;
  }

  get defaultColDef() {
    return this.typeTableService.defaultColDef
  }

  get rowHeight() {
    return this.typeTableService.rowHeight;
  }

  get headerHeight() {
    return this.typeTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.typeTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.typeTableService.frameworkComponents;
  }
  get rowData() {
    return this.typeTableService.rowData;
  }

}

