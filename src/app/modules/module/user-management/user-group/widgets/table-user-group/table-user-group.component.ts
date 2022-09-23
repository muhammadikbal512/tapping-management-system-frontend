import { Component, OnInit } from '@angular/core';
import { RowClassRules, GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-group-table.service';
@Component({
  selector: 'app-table-user-group',
  templateUrl: './table-user-group.component.html',
  styleUrls: ['./table-user-group.component.css']
})
export class TableUserGroupComponent implements OnInit {
  constructor(
    private UserGroupTableService: UserGroupTableService
  ) {}

  public rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    }
  }

  ngOnInit(): void {}

  // onGridReady(params: GridReadyEvent) {
  //   this.UserGroupTableService.gridApi = params.api;
  //   this.UserGroupTableService.gridColumnApi = params.columnApi;
  // }

  onCellClicked(data: RowClickedEvent) {
  }


  get animateRow() {
    return this.UserGroupTableService.animateRow;
  }

  get columnDefs() {
    return this.UserGroupTableService.columnDef;
  }

  get defaultColDef() {
    return this.UserGroupTableService.defaultColDef
  }

  get rowHeight() {
    return this.UserGroupTableService.rowHeight;
  }

  get headerHeight() {
    return this.UserGroupTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.UserGroupTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.UserGroupTableService.frameworkComponents;
  }
  get rowData() {
    return this.UserGroupTableService.rowData;
  }

}
