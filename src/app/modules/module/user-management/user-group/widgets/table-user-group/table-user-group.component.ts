import { Component, OnInit } from '@angular/core';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-management/user-group-table.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-management/user-group.service';
@Component({
  selector: 'app-table-user-group',
  templateUrl: './table-user-group.component.html',
  styleUrls: ['./table-user-group.component.css'],
})
export class TableUserGroupComponent implements OnInit {
  constructor(
    private UserGroupTableService: UserGroupTableService,
    private userGroupService: UserGroupService
  ) {}

  ngOnInit(): void {
    this.getAllUserGroups();
  }

  getAllUserGroups() {
    this.userGroupService.onGetAllUserGroup();
  }

  onRowSelect(data: any) {
    this.userGroupService.existingData = data.data;
  }

  refreshTable() {
    this.getAllUserGroups();
  }

  showDialog() {
    this.userGroupService.buttonStatus = 'create';
    this.userGroupService.openDialog();
  }

  get cols() {
    return this.UserGroupTableService.cols;
  }

  get loading() {
    return this.UserGroupTableService.loading;
  }

  get userGroups() {
    return this.UserGroupTableService.userGroups;
  }
}
