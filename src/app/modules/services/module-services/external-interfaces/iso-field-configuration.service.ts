import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IsoFieldConfigurationTableService } from './iso-field-configuration-table.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Iso8583FieldDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-field-configuration/iso8583-field.dispatch';
import { CreateUpdateIso8583FieldFormComponent } from '../../../module/external-interface/iso8583configuration/iso8583-field-configuration/widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';
import { IsoFieldConfigurationModel } from 'src/app/model/modules-model/iso-field-configuration.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import {
  Iso8583FieldModel,
  Iso8583SubFieldModel,
} from 'src/app/model/modules-model/iso8583-field.model';
import { FieldFormatModel } from 'src/app/model/modules-model/field-format.model';
import { SubfieldCreateUpdateComponent } from 'src/app/modules/module/external-interface/iso8583configuration/iso8583-field-configuration/widget/iso8583-subfield/subfield-create-update/subfield-create-update.component';

@Injectable({
  providedIn: 'root',
})
export class IsoFieldConfigurationService {
  buttonStatus: string = '';
  existingData: Iso8583FieldModel = new Iso8583FieldModel();
  subFieldData: Iso8583SubFieldModel[] = [];
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: false,
    width: '100%',
    maxHeight: '90vh',
  };
  apiUrl = environment.core236;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private isoFieldConfigurationTableService: IsoFieldConfigurationTableService,
    private isoFieldDispatch: Iso8583FieldDispatch
  ) {}

  getAllIsoFieldConfiguration() {
    return this.http.get<HttpResponseData<Iso8583FieldModel>>(
      `${this.apiUrl}/iso_field_configuration/getAll`
    );
  }

  getAllFieldFormat() {
    return this.http.get<HttpResponseData<FieldFormatModel>>(
      `${this.apiUrl}/field_format/getAll`
    );
  }

  addIsoFieldConfiguration(data: Iso8583FieldModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/iso_field_configuration/add`,
      data
    );
  }

  updateIsoFieldConfiguration(data: Iso8583FieldModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/iso_field_configuration/update`,
      data
    );
  }

  deleteIsoFieldConfiguration(id: number) {
    return this.http.delete<HttpResponseData<any>>(
      `${this.apiUrl}/iso_field_configuration/delete/` + id
    );
  }

  getAllIsoFieldConfigurationWithDelay() {
    setTimeout(() => {
      this.onGetAllIsoFieldConfiguration();
    }, 500);
  }

  onGetAllIsoFieldConfiguration() {
    this.isoFieldDispatch._Iso8583FieldGetDispatch();
  }

  onGetIsoSubFieldConfiguration() {
    this.isoFieldDispatch._Iso8583SubFieldGetDispatch();
  }

  onGetAllIsoConfig() {
    this.isoFieldDispatch._Iso8583FieldIsoConfigGetDispatch();
  }

  onGetAllEncoding() {
    this.isoFieldDispatch._Iso8583FieldEncodingGetDispatch();
  }

  onGetAllFieldFormat() {
    this.isoFieldDispatch._Iso8583FieldFormatGetDispatch();
  }

  onCreateIsoFieldConfiguration(data: Iso8583FieldModel) {
    this.isoFieldDispatch._Iso8583FieldAddDispatch(data);
  }

  onCreateIsoSubFieldConfiguration(data: Iso8583SubFieldModel) {
    this.isoFieldDispatch._Iso8583SubFieldAddDispatch(data);
  }

  onUpdateIsoFieldConfiguration(payload: Iso8583FieldModel) {
    this.isoFieldDispatch._Iso8583FieldUpdateDispatch(payload);
  }

  onDeleteIsoFieldConfiguration() {
    this.isoFieldDispatch._Iso8583FieldDeleteDispatch(this.existingData.id);
  }
  createIsoFieldConfigurationFormData(
    currentIsoFieldId: string,
    newData: IsoFieldConfigurationModel
  ): FormData {
    const formData = new FormData();
    formData.append('currentIsoFieldId', currentIsoFieldId);
    formData.append('isoFieldId', String(newData.isoFieldId));
    formData.append('tagNumber', String(newData.tagNumber));
    formData.append('dialectId', String(newData.dialectId));
    formData.append('attributeId', String(newData.attributeId));
    return formData;
  }

  openDialog() {
    this.dialog.open(CreateUpdateIso8583FieldFormComponent, this.dialogConfig);
  }

  openSubFieldDialog() {
    this.dialog.open(SubfieldCreateUpdateComponent, this.dialogConfig);
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
