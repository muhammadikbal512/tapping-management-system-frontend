import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/roles-table.service';
import { RowClickedEvent, GridReadyEvent, RowClassRules } from 'ag-grid-community';

@Component({
  selector: 'app-table-roles',
  templateUrl: './table-roles.component.html',
  styleUrls: ['./table-roles.component.css'],
})
export class TableRolesComponent implements OnInit {
  constructor(
    private rolesService: RolesService,
    private rolesTableService: RolesTableService
  ) {}

  ngOnInit(): void {}

  rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.rolesTableService.GridApi = params;
    this.rolesTableService.GridColumnApi = params;
    this.runService();
  }

  onCellClicked(data: RowClickedEvent) {
    this.rolesService.ExistingData = data;
  }

  runService() {
    this.rolesTableService.showTableLoading();
    this.rolesService.getAllRolesWithDelay();
  }

  get animateRow() {
    return this.rolesTableService.animateRow
  }

  get headerHeight() {
    return this.rolesTableService.headerHeight
  }

  get columnDef() {
    return this.rolesTableService.columnDef
  }

  get rowHeight() {
    return this.rolesTableService.rowHeight
  }

  get defaultColDef() {
    return this.rolesTableService.defaultColDef
  }

  get overlayLoadingTemplate() {
    return this.rolesTableService.overlayLoadingTemplate
  }

  get frameworkComponents() {
    return this.rolesTableService.frameworkComponents
  }


}
