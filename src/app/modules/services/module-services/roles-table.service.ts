import { Injectable } from '@angular/core';
import { RolesModel } from 'src/app/model/modules-model/roles.model';

@Injectable({
  providedIn: 'root',
})
export class RolesTableService {
  loading: boolean = true;
  roles!: RolesModel[];
  cols = [
    { field: 'roleName', header: 'Rolename' },
  ]

  constructor() {}

  setRowData(data: RolesModel[]) {
    this.roles = data;
  }
}
