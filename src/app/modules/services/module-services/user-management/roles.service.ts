import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { RolesDispatch } from 'src/app/state-configuration/modules/user-management/roles/roles.dispatch';
import { environment } from 'src/environments/environment';
import { RolesTableService } from './roles-table.service';
import { CreateDialogRolesComponent } from '../../../module/user-management/roles/widgets/create-dialog-roles/create-dialog-roles.component';
import { EditDialogRolesComponent } from '../../../module/user-management/roles/widgets/edit-dialog-roles/edit-dialog-roles.component';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private apiUrl = environment.core236;
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: true,
    disableClose: true,
    width: '55%',
  };
  existingData: RolesModel = new RolesModel();
  constructor(
    private rolesTableService: RolesTableService,
    private rolesDispatch: RolesDispatch,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}

  getAllRoles() {
    return this.http.get<RolesModel[]>(`${this.apiUrl}/role/list`);
  }

  getRolesWithUser(name: string) {
    return this.http.get<RolesModel[]>(`${this.apiUrl}/role/find` + name);
  }

  addRoles(data: RolesModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/role/add`,
      data
    );
  }

  deleteRole(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/role/delete/` + id
    );
  }

  updateRole(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/role/update`,
      data
    );
  }

  getAllRolesWithDelay() {
    setTimeout(() => {
      this.onGetAllRoles();
    }, 500);
  }

  createRoleFormData(currentRoleName: string, newData: RolesModel) {
    const formData = new FormData();
    formData.append('currentRoleName', currentRoleName);
    formData.append('roleName', newData.roleName);
    return formData;
  }

  onGetAllRoles() {
    this.rolesDispatch._RolesGetDispatch();
  }

  onGetAllAuthorities() {
    this.rolesDispatch._AuthoritiesGetDispatch();
  }

  onCreateRoles(data: RolesModel) {
    this.rolesDispatch._RolesAddDispatch(data);
  }

  onUpdateRoles(data: FormData) {
    this.rolesDispatch._RolesUpdateDispatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  onDeleteRole() {
    this.rolesDispatch._RolesDeleteDispatch(this.existingData.id);
  }

  openDialog() {
    this.dialog.open(CreateDialogRolesComponent, this.dialogConfig);
  }

  editDialog() {
    this.dialog.open(EditDialogRolesComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: RolesModel) {
    this.existingData = data;
  }
}