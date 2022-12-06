import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user-model/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  loading: boolean = true;
  users!: UserModel[];
  cols = [
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
    { field: 'lastLoginDate', header: 'Last Login' },
  ];

  constructor() {}

  setRowData(data: UserModel[]) {
    this.users = data;
  }
}
