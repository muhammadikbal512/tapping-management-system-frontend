import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { MessageFormatDispatch } from 'src/app/state-configuration/modules/message-format/message-format.dispatch';

@Injectable({
  providedIn: 'root'
})
export class MessageFormatService {
  apiUrl = environment.core236
  existingData: Iso8583FormatModel = new Iso8583FormatModel();
  constructor(private http: HttpClient, private messageFormatDispatch: MessageFormatDispatch) { }

  getAllIso8583Format() {
    return this.http.get<Iso8583FormatModel[]>(`${this.apiUrl}/messageFormat/list`);
  }

  addIso8583Format(data: Iso8583FormatModel) {
    return this.http.post<CustomHttpResponseModel>(`${this.apiUrl}/messageFormat/add`, data);
  }

  updateIso8583Format(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(`${this.apiUrl}/messageFormat/update`, data);
  }

  deleteIso8583Format(id: number) {
    return this.http.delete<CustomHttpResponseModel>(`${this.apiUrl}/messageFormat/delete/` + id);
  }

  onCreateIso8583Format(data: Iso8583FormatModel) {
    this.messageFormatDispatch._MessageFormatAddDispatch(data);
  }

  onUpdateIso8583Format(data: FormData) {
   this.messageFormatDispatch._MessageFormatUpdateDispatch(data, this.existingData.messageFormatId, this.existingData);
  }

  onDeleteIso8583Format() {
    this.messageFormatDispatch._MessageFormatDeleteDispatch(this.existingData.messageFormatId);
  }
}
