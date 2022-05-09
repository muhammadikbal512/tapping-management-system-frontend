import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { UserTableService } from 'src/app/modules/services/module-services/user-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userTableService: UserTableService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.userTableService.GridApi = params;
    this.userTableService.GridcolumnApi = params;
    this.runService()
  }

  onCellClicked(data: RowClickedEvent) {
    this.userService.ExistingData = data
  }

  runService() {
    this.userTableService.showTableLoading();
    this.userService.getAllUserWithDelay();
  }

  get animateRow() {
    return this.userTableService.animateRow;
  }

  get columnDefs() {
    return this.userTableService.columnDef;
  }

  get defaultColDef() {
    return this.userTableService.defaultColDef
  }

  get rowHeight() {
    return this.userTableService.rowHeight;
  }

  get headerHeight() {
    return this.userTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.userTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.userTableService.frameworkComponents;
  }
}
