import { Component, OnInit } from '@angular/core';
import { RowClassRules, GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-group-table.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-group.service';
@Component({
  selector: 'app-table-user-group',
  templateUrl: './table-user-group.component.html',
  styleUrls: ['./table-user-group.component.css']
})
export class TableUserGroupComponent implements OnInit {
  constructor(
    private UserGroupTableService: UserGroupTableService,
    private userGroupService: UserGroupService
  ) {}

  public rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    }
  }

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.UserGroupTableService.gridApi = params.api;
    this.UserGroupTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.UserGroupTableService.showTableLoading();
    this.userGroupService.onGetAllUserGroup();
  }

  onCellClicked(data: RowClickedEvent) {
    this.userGroupService.ExistingData = data;
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
