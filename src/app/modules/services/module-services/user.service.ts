import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from '../../../model/user-model/user.model';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { RowClickedEvent } from 'ag-grid-community';
import { UserTableService } from './user-table.service';
import { UserDispatch } from 'src/app/state-configuration/modules/user-management/user/user.dispatch';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserCreateDialogComponent } from '../../module/user-management/user/widgets/user-create-dialog/user-create-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.core236;
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '70%',
  };
  existingData: UserModel = new UserModel();

  constructor(
    private http: HttpClient,
    private userTableService: UserTableService,
    private userDispatch: UserDispatch,
    private dialog: MatDialog
  ) {}

  getAllUsers() {
    return this.http.get<UserModel[]>(`${this.apiUrl}/listUsers`);
  }

  deleteUser(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/delete/` + id
    );
  }

  addUser(data: UserModel) {
    const params = new HttpParams()
    .set('firstName', data.firstName)
    .set('lastName', data.lastName)
    .set('username', data.username)
    .set('email', data.email)
    .set('role', 'ROLE_USER')
    .set('isActive', data.active)
    .set('isNonLocked', data.notLocked)
    .set('institution', data.institution.id)
    .set('type', data.type.id)
    .set('userGroup', data.userGroup.id)
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/user/add`,
      data, {params}
    );
  }

  updateUser(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/user/update`,
      data
    );
  }

  resetPasswordUser(email: string) {
    return this.http.get<CustomHttpResponseModel>(
      `${this.apiUrl}/user/resetpassword/` + email
    );
  }

  createUserFormData(currentUsername: string, newData: UserModel): FormData {
    const formData = new FormData();
    formData.append('currentUsername', currentUsername);
    formData.append('firstName', newData.firstName);
    formData.append('lastName', newData.lastName);
    formData.append('username', newData.username);
    formData.append('email', newData.email);
    // formData.append('role', this.existingData.role);
    formData.append('role', String(newData.role.id));
    formData.append('type', String(newData.type.id));
    formData.append('institution', String(newData.institution.id));
    formData.append('userGroup', String(newData.userGroup.id));
    formData.append('isActive', String(this.existingData.active));
    formData.append('isNonLocked', String(this.existingData.notLocked));
    return formData;
  }

  getAllUserWithDelay() {
    setTimeout(() => {
      this.onGetAllUser();
    }, 500);
  }

  onGetAllUser() {
    this.userTableService.showTableLoading();
    this.userDispatch._UserGetDispatch();
  }

  OnGetAllRoles() {
    this.userDispatch._UserGetRolesDispatch();
  }

  OnGetAllInstitutions() {
    this.userDispatch._UserGetInstitutionDispatch();
  }

  OnGetAllTypes() {
    this.userDispatch._UserGetTypeDispatch();
  }

  OnGetAllUserGroups() {
    this.userDispatch._UserGetUserGroup();
  }

  onCreateUser(data: UserModel) {
    this.userDispatch._UserAddDispatch(data);
  }

  onDeleteUser() {
    this.userDispatch._UserDeleteDispatch(this.existingData.id);
  }

  onResetPasswordUser() {
    this.userDispatch._UserResetPasswordDispatch(this.existingData.email);
  }

  onUpdateUser(data: FormData) {
    this.userDispatch._UserUpdateDispatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  openDialog() {
    this.dialog.open(UserCreateDialogComponent, this.dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
