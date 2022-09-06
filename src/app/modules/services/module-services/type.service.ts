import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeModel } from 'src/app/model/modules-model/type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  apiUrl = environment.core236;
  constructor(private http: HttpClient) { }

  getAllType() {
    return this.http.get<TypeModel[]>(`${this.apiUrl}/type/list`);
  }

  addType(data: TypeModel) {
    return this.http.post<CustomHttpResponseModel>(`${this.apiUrl}/list/add`, data);
  }

  deleteType(id: number) {
    return this.http.delete<CustomHttpResponseModel>(`${this.apiUrl}/list/delete` + id)
  }

  updateType(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(`${this.apiUrl}/type/update`, data)
  }

  getAllTypeWithDelay() {
    
  }
}
