import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelTypeService {
  apiUrl = environment.core236

  constructor(private http: HttpClient) { }

  getAllChannelTypeList() {
    return this.http.get<ChannelTypeModel[]>(`${this.apiUrl}/channelType/list`)
  }

  addAllChannelType(data: ChannelTypeModel, id: number) {
    return this.http.post<ChannelTypeModel[]>(`${this.apiUrl}/channelType/` + id + `/register`, data)
  }

  deleteChannelType(id: number) {
    return this.http.delete<CustomHttpResponseModel[]>(`${this.apiUrl}/channelType/delete` + id)
  }
}
