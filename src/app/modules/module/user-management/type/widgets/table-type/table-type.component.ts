import { Component, OnInit } from '@angular/core';
import {
  GridReadyEvent,
  RowClassRules,
  RowClickedEvent,
} from 'ag-grid-community';
import { TypeTableService } from 'src/app/modules/services/module-services/type-table.service';
import { TypeService } from 'src/app/modules/services/module-services/type.service';

@Component({
  selector: 'app-table-type',
  templateUrl: './table-type.component.html',
  styleUrls: ['./table-type.component.css'],
})
export class TableTypeComponent implements OnInit {
  constructor(
    private typeService: TypeService,
    private typeTableService: TypeTableService
  ) {}

  public rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    },
  };

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.typeTableService.gridApi = params.api;
    this.typeTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.typeTableService.showTableLoading();
    this.typeService.getAllTypeWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {
    this.typeService.ExistingData = data;
  }

  get animateRow() {
    return this.typeTableService.animateRow;
  }

  get columnDefs() {
    return this.typeTableService.columnDef;
  }

  get defaultColDef() {
    return this.typeTableService.defaultColDef;
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
}
