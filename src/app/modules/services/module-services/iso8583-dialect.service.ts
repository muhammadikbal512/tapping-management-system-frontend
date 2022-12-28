import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageFormatService } from './message-format.service';
import { CreateUpdateIso8583DialectComponent } from '../../module/external-interface/iso8583configuration/iso8583dialect/widgets/create-update-iso8583-dialect/create-update-iso8583-dialect.component';
import { DialectDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-dialect/dialect.dispatch';
import { MessageFormatGroupInterface } from 'src/app/interface/modules/message-format-group-interface';
import { Iso8583DialectTableServiceService } from './iso8583-dialect-table-service.service';

@Injectable({
  providedIn: 'root',
})
export class Iso8583DialectService {
  private apiUrl = environment.core236;
  buttonStatus: string = '';
  customHttpResponse!: CustomHttpResponseModel;
  msgFormatIdList: MessageFormatGroupInterface[] = [];
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '55%',
  };
  existingData: Iso8583DialectMsgTemplate = new Iso8583DialectMsgTemplate();

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private dialectDispatch: DialectDispatch,
    private msgFormatService: MessageFormatService,
    private iso8583DialectTableService: Iso8583DialectTableServiceService
  ) {}

  getAllIso8583Dialect() {
    return this.http.get<Iso8583DialectMsgTemplate[]>(`${this.apiUrl}/dialectMsgTemplate/list`);
  }

  addIso8583Dialect(data: Iso8583DialectMsgTemplate) {
    return this.http.post<CustomHttpResponseModel>(`${this.apiUrl}/dialectMsgTemplate/${data.messageFormat.messageFormatId}/add`, data);
  }

  updateIso8583Dialect(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(`${this.apiUrl}/dialectMsgTemplate/update`, data)
  }

  deleteIso8583Dialect(id: number) {
    return this.http.delete<CustomHttpResponseModel>(`${this.apiUrl}/dialectMsgTemplate/delete/` + id);
  }

  onGetAllIso8583Dialect() {
    this.dialectDispatch._DialectGetDispatch();
  }

  onCreateIso8583Dialect(payload: Iso8583DialectMsgTemplate) {
    this.dialectDispatch._DialectAddDispatch(payload);
  }

  onUpdateIso8583Dialect(payload: FormData, dataState: Iso8583DialectMsgTemplate) {
    this.dialectDispatch._DialectUpdateDispatch(payload, dataState, this.existingData.templateId);
  }

  onDeleteIso8583Dialect() {
    this.dialectDispatch._DialectDeleteDispatch(this.existingData.templateId);
  }

  onGetAllMessageFormat() {
    this.dialectDispatch._DialectGetMessageFormat();
  }

  createIso8583DialectFormData(currentNameType: string, newData: Iso8583DialectMsgTemplate): FormData {
    const formData = new FormData();
    formData.append('currentNameType', currentNameType);
    formData.append('nameType', newData.nameType);
    formData.append('description', newData.description);
    formData.append('messageFormatId', String(newData.messageFormat.messageFormatId));
    return formData;
  }

  openDialog() {
    this.dialog.open(CreateUpdateIso8583DialectComponent, this.dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  set ExistingData(data: Iso8583DialectMsgTemplate) {
    this.existingData = data;
  }
}
