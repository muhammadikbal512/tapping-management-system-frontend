import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { UserGroupModel } from 'src/app/model/modules-model/user-group.model';
import { environment } from 'src/environments/environment';
import { UserGroupDispatch } from 'src/app/state-configuration/modules/user-management/user-group/user-group.dispatch';
import { UserGroupTableService } from './user-group-table.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserGroupCreateDialogComponent } from '../../module/user-management/user-group/widgets/user-group-create-dialog/user-group-create-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UserGroupService {
  existingData: UserGroupModel = new UserGroupModel();
  buttonStatus: string = '';
  matDialogConfig: MatDialogConfig = {
    width: '55%',
    autoFocus: true,
    disableClose: true,
  };
  private apiUrl: string = environment.core236;
  constructor(
    private http: HttpClient,
    private userGroupTableService: UserGroupTableService,
    private userGroupDispatch: UserGroupDispatch,
    private dialog: MatDialog
  ) {}

  getAllUserGroup() {
    return this.http.get<UserGroupModel[]>(`${this.apiUrl}/usergroup/list`);
  }

  addUserGroup(data: UserGroupModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/usergroup/add`,
      data
    );
  }

  deleteUserGroup(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/usergroup/delete` + id
    );
  }

  updateUserGroup(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/usergroup/update`,
      data
    );
  }

  getAllUserGroupWithDelay() {
    setTimeout(() => {
      this.onGetAllUserGroup();
    }, 500);
  }

  createUserGroupFormData(newData: UserGroupModel): FormData {
    const formData = new FormData();
    formData.append('name', newData.userGroupName);
    return formData;
  }

  onGetAllUserGroup() {
    this.userGroupTableService.showTableLoading();
    this.userGroupDispatch._UserGroupGetDispatch();
  }

  onAddUserGroup(data: UserGroupModel) {
    this.userGroupDispatch._UserGroupAddDispatch(data);
  }

  onDeleteUserGroup() {
    this.userGroupDispatch._UserGroupDeleteDispatch(this.existingData.id);
  }

  onUpdateUserGroup(data: FormData) {
    this.userGroupDispatch._UserGroupUpdateDispatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  openDialog() {
    this.dialog.open(UserGroupCreateDialogComponent, this.matDialogConfig);
  }
}
