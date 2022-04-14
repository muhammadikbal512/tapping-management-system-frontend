import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../../model/user-model/user.model'
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.core236
  existingData: UserModel = new UserModel();

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<UserModel[]>(`${this.apiUrl}/listUsers`)
  }

  deleteUser(id: number) {
    return this.http.get<CustomHttpResponseModel[]>(`${this.apiUrl}/delete` + id)
  }

}
