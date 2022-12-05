import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/roles-table.service';
import {
  RowClickedEvent,
  GridReadyEvent,
  RowClassRules,
} from 'ag-grid-community';
import { Select } from '@ngxs/store';
import { RolesState } from 'src/app/state-configuration/modules/user-management/roles/roles.state';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

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

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesService.onGetAllRoles();
  }

  refreshTable() {
    this.getAllRoles();
  }

  onRowSelect(data: any) {
    console.log((this.rolesService.ExistingData = data.data));
  }

  showDialog() {
    this.rolesService.buttonStatus = 'create';
    this.rolesService.openDialog();
  }

  get cols() {
    return this.rolesTableService.cols;
  }

  get loading() {
    return this.rolesTableService.loading;
  }

  get roles() {
    return this.rolesTableService.roles;
  }
}
