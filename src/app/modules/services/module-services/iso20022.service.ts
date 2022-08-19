import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';
import { Iso20022Dispatch } from 'src/app/state-configuration/modules/external-interfaces/iso20022/iso20022.dispatch';
import { environment } from 'src/environments/environment';
import { CreateUpdateIso20022Component } from '../../module/external-interface/iso20022/widgets/create-update-iso20022/create-update-iso20022.component';
import { Iso20022TableService } from './iso20022-table.service';

@Injectable({
  providedIn: 'root',
})
export class Iso20022Service {
  dialogConfig: MatDialogConfig = {
    width: '55%',
  };
  buttonStatus: string = ''
  existingData: Iso20022Model = new Iso20022Model();
  apiUrl: string = environment.core236;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private iso20022Dispatch: Iso20022Dispatch,
    private iso20022TableService: Iso20022TableService
  ) {}

  getAllIso20022() {
    return this.http.get<Iso20022Model[]>(`${this.apiUrl}/iso20022/list`);
  }

  addIso20022(data: Iso20022Model) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/iso20022/add`,
      data
    );
  }

  deleteIso20022(id: number) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/iso20022/delete`,
      id
    );
  }

  updateIso20022(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/iso20022/update`,
      data
    );
  }

  openDialog() {
    this.dialog.open(CreateUpdateIso20022Component, this.dialogConfig);
  }

  getAllIso20022WithDelay() {
    setTimeout(() => {
      this.onGetAllIso20022();
    }, 500);
  }

  onGetAllIso20022() {
    this.iso20022TableService.showTableLoading();
    this.iso20022Dispatch._Iso20022GetDispatch();
  }

  onCreateIso20022(data: Iso20022Model) {
    this.iso20022Dispatch._Iso20022AddDispatch(data);
  }

  onDeleteIso20022() {
    this.iso20022Dispatch._Iso20022DeleteDispatch(this.existingData.id);
  }

  onUpdateIso20022(data: FormData, stateData: Iso20022Model) {
    this.iso20022Dispatch._Iso20022UpdateDispatch(this.existingData.id, data, stateData);
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: Iso20022Model) {
    this.existingData = data;
  }
}
