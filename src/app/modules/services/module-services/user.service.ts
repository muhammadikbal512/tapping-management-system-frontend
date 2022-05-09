import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../../model/user-model/user.model';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { RowClickedEvent } from 'ag-grid-community';
import { UserTableService } from './user-table.service';
import { UserDispatch } from 'src/app/state-configuration/modules/user-management/user/user.dispatch';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.core236;
  existingData: UserModel = new UserModel();

  constructor(
    private http: HttpClient,
    private userTableService: UserTableService,
    private userDispatch: UserDispatch
  ) {}

  getAllUsers() {
    return this.http.get<UserModel[]>(`${this.apiUrl}/listUsers`);
  }

  deleteUser(id: number) {
    return this.http.get<CustomHttpResponseModel[]>(
      `${this.apiUrl}/delete` + id
    );
  }

  getAllUserWithDelay() {
    setTimeout(() => {
      this.onGetAllUser();
    }, 500)
  }

  onGetAllUser() {
    this.userTableService.showTableLoading();
    this.userDispatch._UserGetDispatch();
  }

  onDeleteUser() {
    this.userDispatch._UserDeleteDispatch(this.existingData.id)
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
