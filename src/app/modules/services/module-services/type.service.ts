import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeModel } from 'src/app/model/modules-model/type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { environment } from 'src/environments/environment';
import { TypeDispatch } from 'src/app/state-configuration/modules/user-management/type/type.dispatch';
import { TypeTableService } from './type-table.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  apiUrl = environment.core236;
  existingData: TypeModel = new TypeModel();
  constructor(private http: HttpClient, private typeDispatch: TypeDispatch, private typeTableService: TypeTableService) {}

  getAllType() {
    return this.http.get<TypeModel[]>(`${this.apiUrl}/type/list`);
  }

  addType(data: TypeModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/list/add`,
      data
    );
  }

  deleteType(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/list/delete` + id
    );
  }

  updateType(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/type/update`,
      data
    );
  }

  getAllTypeWithDelay() {
    setTimeout(() => {
      this.onGetAllType();
    }, 500);
  }

  onGetAllType() {
    this.typeTableService.showTableLoading();
    this.typeDispatch._TypeGetDispatch();
  }

  onAddType(data: TypeModel) {
    this.typeDispatch._TypeAddDispatch(data);
  }

  onDeleteType() {
    this.typeDispatch._TypeDeleteDispatch(this.existingData.id);
  }

  onUpdateType(data: FormData) {
    this.typeDispatch._TypeUpdateDispatch(this.existingData.id, data, this.existingData)
  }
}
