import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { HeaderConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/header-configuration/widgets/header-config-create-update-dialog/header-config-create-update-dialog.component';
import { HeaderConfigDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/header-configuration/header-config.dispatch';
import { HeaderConfigStateModel } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/header-configuration/header-config.state';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeaderConfigurationService {
  apiUrl: string = environment.core236;
  existingData: HeaderConfigurationModel = new HeaderConfigurationModel();
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private headerDispatch: HeaderConfigDispatch
  ) {}

  getAllHeaderConfigs() {
    return this.http.get<HeaderConfigurationModel[]>(
      `${this.apiUrl}/header_configuration/getAll`
    );
  }

  addHeaderConfig(data: HeaderConfigurationModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/header_configuration/add`,
      data
    );
  }

  updateHeaderConfig(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/header_configuration/update`,
      data
    );
  }

  deleteHeaderConfig(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/header_configuration/delete/` + id
    );
  }

  onGetAllHeaderConfig() {
    this.headerDispatch._HeaderConfigGetDispatch();
  }

  onCreateHeaderConfig(data: HeaderConfigurationModel) {
    this.headerDispatch._HeaderConfigAdd(data);
  }

  onUpdateHeaderConfig(data: FormData, dataState: HeaderConfigurationModel) {
    this.headerDispatch._HeaderConfigUpdate(
      this.existingData.id,
      data,
      dataState
    );
  }

  onDeleteHeaderConfig() {
    this.headerDispatch._HeaderConfigDelete(this.existingData.id);
  }

  createHeaderConfig(
    currentHeaderId: string,
    newData: HeaderConfigurationModel
  ) {
    const formData = new FormData();
    formData.append('currentHeaderId', currentHeaderId);
    formData.append('newHeaderId', String(newData.id));
    formData.append('newHeaderField', String(newData.headerField));
    formData.append('newHeaderLength', String(newData.headerLength));
    formData.append('description', newData.description);
    formData.append('priority', newData.priority);
    return formData;
  }

  openDialog() {
    this.dialog.open(
      HeaderConfigCreateUpdateDialogComponent,
      this.dialogConfig
    );
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }
}
