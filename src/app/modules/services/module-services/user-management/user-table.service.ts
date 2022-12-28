import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user-model/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserTableService {
  loading: boolean = true;
  users!: UserModel[];

  constructor() {}

  setRowData(data: UserModel[]) {
    this.users = data;
  }
}
