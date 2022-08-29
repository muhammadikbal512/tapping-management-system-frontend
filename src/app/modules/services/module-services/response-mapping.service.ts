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

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingService {
  private apiUrl = environment.core236;
  buttonStatus: string = '';
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
    return this.http.get<ResponseMappingModel[]>(`${this.apiUrl}/responseMapping/list`);
  }

  addResponseMapping() {}

  deleteResponseMapping() {}

  updateResponseMapping() {}

  getResponseMappingWithDelay() {
    setTimeout(() => {
      this.onGetAllResponseMapping();
    }, 500);
  }

  onGetAllResponseMapping() {
    this.responseTable.showTableLoading();
    this.responseDispatch._ResponseMappingGetDispatch();
  }

  onCreateResponseMapping(data: ResponseMappingModel) {
    this.responseDispatch._ResponseMappingAddDispatch(data);
  }

  onDeleteResponseMapping() {
    this.responseDispatch._ResponseMappingDeleteDispatch(this.existingData.id);
  }

  onUpdateResponseMapping(data: FormData) {
    this.responseDispatch._ResponseMappingUpdateDispatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  openDialog() {
    this.dialog.open(Iso8583ResponseMappingCreateDialogComponent, this.matDialogConfig)
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data
  }
}
