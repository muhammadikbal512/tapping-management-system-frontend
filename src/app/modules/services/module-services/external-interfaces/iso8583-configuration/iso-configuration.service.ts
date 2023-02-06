import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { IsoConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/iso-configuration/widgets/iso-config-create-update-dialog/iso-config-create-update-dialog.component';
import { IsoConfigDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso-configuration/iso-config.dispatch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IsoConfigurationService {
  apiUrl: string = environment.core236;
  buttonStatus: string = '';
  showLoading!: boolean;
  existingData: IsoConfigurationModel = new IsoConfigurationModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private isoConfigDispatch: IsoConfigDispatch
  ) {}

  getAllIsoConfiguration() {
    return this.http.get<HttpResponseData<IsoConfigurationModel>>(
      `${this.apiUrl}/iso_configuration/getAll`
    );
  }

  addIsoConfiguration(data: IsoConfigurationModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/iso_configuration/add`,
      data
    );
  }

  updateIsoConfiguration(data: IsoConfigurationModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/iso_configuration/update`,
      data
    );
  }

  deleteIsoConfiguration(id: number) {
    return this.http.delete<HttpResponseData<any>>(
      `${this.apiUrl}/iso_configuration/delete/` + id
    );
  }

  onGetAllIsoConfig() {
    this.isoConfigDispatch._IsoConfigGetDispatch();
  }

  onAddAllIsoConfig(data: IsoConfigurationModel) {
    this.isoConfigDispatch._IsoConfigAddDispatch(data);
  }

  onDeleteIsoConfig() {
    this.isoConfigDispatch._IsoConfigDeleteDispatch(this.existingData.id);
  }

  onUpdateIsoConfig(data: IsoConfigurationModel) {
    this.isoConfigDispatch._IsoConfigUpdateDispatch(data);
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openDialog() {
    this.dialog.open(IsoConfigCreateUpdateDialogComponent, this.dialogConfig);
  }
}
