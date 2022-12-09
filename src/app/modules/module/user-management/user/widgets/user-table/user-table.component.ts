import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { UserTableService } from 'src/app/modules/services/module-services/user-table.service';
import { UserModel } from 'src/app/model/user-model/user.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { Select } from '@ngxs/store';
import { UserState } from 'src/app/state-configuration/modules/user-management/user/user.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userTableService: UserTableService,
    private notifierService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.onGetAllUser();
  }

  refreshTable() {
    this.userTableService.loading = true;
    this.getAllUsers();
  }

  onRowSelect(data: any) {
    console.log(data);
    this.userService.ExistingData = data.data;
  }

  showDialog() {
    this.userService.buttonStatus = 'create';
    this.userService.openDialog();
  }

  get cols() {
    return this.userTableService.cols;
  }

  get loading() {
    return this.userTableService.loading;
  }

  get users() {
    return this.userTableService.users;
  }
}
