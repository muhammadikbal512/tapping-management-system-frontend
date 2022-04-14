import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';


@Injectable({
  providedIn: 'root'
})
export class Iso8583DialectService {
  apiUrl = environment.core236
  existingData: Iso8583DialectMsgTemplate = new Iso8583DialectMsgTemplate();

  constructor(private http: HttpClient) { }

  getAllIso8583Dialect() {
    return this.http.get<Iso8583DialectMsgTemplate[]>(`${this.apiUrl}/dialectMsgTemplate/list`)
  }

  addIso8583Dialect(data: Iso8583DialectMsgTemplate, id: number) {
    return this.http.post<Iso8583DialectMsgTemplate[]>(`${this.apiUrl}/dialectMsgTemplate/` + id + `/add`, data)
  }

  deleteIso8583Dialect(id: number){ 
    return this.http.delete<CustomHttpResponseModel[]>(`${this.apiUrl}/dialectMsgTemplate/delete/` + id)
  }
}
