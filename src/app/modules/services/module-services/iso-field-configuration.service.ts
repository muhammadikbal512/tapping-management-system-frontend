import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iso8583FieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { IsoFieldConfigurationTableService } from './iso-field-configuration-table.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Iso8583FieldDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-field-configuration/iso8583-field.dispatch';
import { CreateUpdateIso8583FieldFormComponent } from '../../module/external-interface/iso8583configuration/iso8583-field-configuration/widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';

@Injectable({
  providedIn: 'root',
})
export class IsoFieldConfigurationService {
  buttonStatus: string = '';
  existingData: Iso8583FieldModel = new Iso8583FieldModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: false,
    width: '55%',
  };
  apiUrl = environment.core236;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private isoFieldConfigurationTableService: IsoFieldConfigurationTableService,
    private isoFieldDispatch: Iso8583FieldDispatch
  ) {}

  getAllIsoFieldConfiguration() {
    return this.http.get<Iso8583FieldModel[]>(
      `${this.apiUrl}/IsoFieldConfiguration/list`
    );
  }

  addIsoFieldConfiguration(data: Iso8583FieldModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/IsoFieldConfiguration/add`,
      data
    );
  }

  updateIsoFieldConfiguration(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/IsoFieldConfiguration/update`,
      data
    );
  }

  deleteIsoFieldConfiguration(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/IsoFieldConfiguration/delete/` + id
    );
  }

  getAllIsoFieldConfigurationWithDelay() {
    setTimeout(() => {
      this.onGetAllIsoFieldConfiguration()
    }, 500);
  }

  onGetAllIsoFieldConfiguration() {
    this.isoFieldConfigurationTableService.showTableLoading();
    this.isoFieldDispatch._Iso8583FieldGetDispatch();
  }

  onCreateIsoFieldConfiguration(data: Iso8583FieldModel) {
    this.isoFieldDispatch._Iso8583FieldAddDispatch(data);
  }

  onUpdateIsoFieldConfiguration(id: number, payload: FormData, dataState: Iso8583FieldModel) {
    this.isoFieldDispatch._Iso8583FieldUpdateDispatch(id, payload, dataState)
  }

  onDeleteIsoFieldConfiguration() {
    this.isoFieldDispatch._Iso8583FieldDeleteDispatch(this.existingData.id)
  }

  onGetAllDialect() {
    this.isoFieldDispatch._Iso8583FieldGetDialectDispatch();
  }

  openDialog() {
    this.dialog.open(CreateUpdateIso8583FieldFormComponent, this.dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  set ExistingData(data: Iso8583FieldModel) {
    this.existingData = data;
  }
}
