import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AidConfigurationModel } from 'src/app/model/modules-model/aid-configuration.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { AidConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/aid-configuration/widgets/aid-config-create-update-dialog/aid-config-create-update-dialog.component';
import { AidConfigDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/aid-configuration/aid-config.dispatch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AidConfigurationService {
  buttonStatus: string = '';
  existingData: AidConfigurationModel = new AidConfigurationModel();
  apiUrl = environment.core236;
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private aidConfigDispatch: AidConfigDispatch
  ) {}

  getAllAidConfig() {
    return this.http.get<HttpResponseData<AidConfigurationModel>>(
      `${this.apiUrl}/list_aid_label/getAll`
    );
  }

  addAidConfig(data: AidConfigurationModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/list_aid_label/add`,
      data
    );
  }

  updateAidConfig(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/list_aid_label/update`,
      data
    );
  }

  deleteAidConfig(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/list_aid_label/delete/` + id
    );
  }

  createAidConfigFormData(id: number, newData: AidConfigurationModel) {
    const formData = new FormData();
    formData.append('id', String(id));
    formData.append('aid', String(newData.aid));
    formData.append('label', newData.label);
    return formData;
  }

  onGetAidConfig() {
    this.aidConfigDispatch._AidConfigGetDispatch();
  }

  onAddAidConfig(data: AidConfigurationModel) {
    this.aidConfigDispatch._AidConfigAddDispatch(data);
  }

  onUpdateAidConfig(data: FormData, dataState: AidConfigurationModel) {
    this.aidConfigDispatch._AidConfigUpdateDispatch(
      this.existingData.id,
      data,
      dataState
    );
  }

  onDeleteAidConfig() {
    this.aidConfigDispatch._AidConfigDeleteDispatch(this.existingData.id);
  }

  openDialog() {
    this.dialog.open(AidConfigCreateUpdateDialogComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: AidConfigurationModel) {
    this.existingData = data;
  }
}
