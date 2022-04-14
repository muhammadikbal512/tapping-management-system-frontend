import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChannelModel } from 'src/app/model/modules-model/channel.model';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  apiUrl = environment.core236

  constructor(private http: HttpClient) { }

  getAllChannel() {
    return this.http.get<ChannelModel[]>(`${this.apiUrl}/channel/list`)
  }

  addChannel(data: ChannelModel, id: number) {
    return this.http.post<ChannelModel[]>(`${this.apiUrl}/channel/` + id + `/register`, data)
  }

  deleteChannel(id: number) {
    return this.http.delete<CustomHttpResponseModel[]>(`${this.apiUrl}/channel/delete/` + id)
  }


}
