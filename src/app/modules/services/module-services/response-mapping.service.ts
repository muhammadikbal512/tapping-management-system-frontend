import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import { ResponseMappingDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-response-mapping/response-mapping.dispatch';
import { environment } from 'src/environments/environment';
import { Iso8583ResponseMappingCreateDialogComponent } from '../../module/external-interface/iso8583configuration/iso8583-response-mapping/widget/iso8583-response-mapping-create-dialog/iso8583-response-mapping-create-dialog.component';
import { ResponseMappingTableService } from './response-mapping-table.service';
import { RowClickedEvent } from 'ag-grid-community';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingService {
  private apiUrl = environment.core236;
  buttonStatus: string = '';
  showLoading: boolean = false;
  matDialogConfig: MatDialogConfig = {
    width: '55%',
    autoFocus: true,
    disableClose: true,
  };
  existingData: ResponseMappingModel = new ResponseMappingModel();
  constructor(
    private responseDispatch: ResponseMappingDispatch,
    private responseTable: ResponseMappingTableService,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}

  getAllResponseMapping() {
    return this.http.get<HttpResponseData<ResponseMappingModel>>(
      `${this.apiUrl}/resp_mapping/getAll`
    );
  }

  addResponseMapping(data: ResponseMappingModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/resp_mapping/add`,
      data
    );
  }

  deleteResponseMapping(id: number) {
    return this.http.delete<HttpResponseData<any>>(
      `${this.apiUrl}/resp_mapping/delete/` + id
    );
  }

  updateResponseMapping(data: ResponseMappingModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/resp_mapping/update`,
      data
    );
  }

  getResponseMappingWithDelay() {
    setTimeout(() => {
      this.onGetAllResponseMapping();
    }, 500);
  }

  createResponseMappingFormData(
    currentRespCode: string,
    newData: ResponseMappingModel
  ): FormData {
    const formData = new FormData();
    formData.append('currentRespCode', currentRespCode);
    formData.append('newRespCode', newData.respCode);
    formData.append('newDescription', newData.description);
    formData.append('isoConfiguration', String(newData.isoConfiguration));
    return formData;
  }

  onGetAllResponseMapping() {
    this.responseDispatch._ResponseMappingGetDispatch();
  }

  onGetAllIsoConfig() {
    this.responseDispatch._ResponseMappingGetIsoConfigDispatch();
  }

  onCreateResponseMapping(data: ResponseMappingModel) {
    this.responseDispatch._ResponseMappingAddDispatch(data);
  }

  onDeleteResponseMapping() {
    this.responseDispatch._ResponseMappingDeleteDispatch(this.existingData.id);
  }

  onUpdateResponseMapping(payload: ResponseMappingModel) {
    this.responseDispatch._ResponseMappingUpdateDispatch(payload);
  }

  openDialog() {
    this.dialog.open(
      Iso8583ResponseMappingCreateDialogComponent,
      this.matDialogConfig
    );
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
