import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { UserTableService } from 'src/app/modules/services/module-services/user-table.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userTableService: UserTableService
  ) {}

  ngOnInit(): void {}

  onFilterTextBoxChange() {
    this.userTableService.onFilter('search-filter')
  }

  refreshTable() {
    this.userService.getAllUserWithDelay()
  }
}
