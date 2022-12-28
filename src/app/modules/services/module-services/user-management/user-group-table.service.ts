import { Injectable } from '@angular/core';
import { UserGroupModel } from 'src/app/model/modules-model/user-group.model';

@Injectable({
  providedIn: 'root',
})
export class UserGroupTableService {
  loading: boolean = true;
  userGroups!: UserGroupModel[];

  cols = [
    { field: 'groupName', header: 'UserGroup Name' },
  ];

  constructor() {}

 setRowData(data: UserGroupModel[]) {
  this.userGroups = data;
 }
}
