import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RowClickedEvent } from 'ag-grid-community';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { InstitutionDispatch } from 'src/app/state-configuration/modules/user-management/institution/institution.dispatch';
import { environment } from 'src/environments/environment';
import { InstitutionCreateDialogComponent } from '../../module/user-management/institution/widgets/institution-create-dialog/institution-create-dialog.component';
import { InstitutionTableService } from './institution-table.service';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  private apiURL: string = environment.core236;
  buttonStatus: string = '';
  existingData: InstitutionModel = new InstitutionModel();
  matDialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '55%',
  };
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private institutionDispatch: InstitutionDispatch,
    private institutionTableService: InstitutionTableService
  ) {}

  getAllInstitution() {
    return this.http.get<InstitutionModel[]>(`${this.apiURL}/institution/list`);
  }

  addInstitution(data: InstitutionModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiURL}/institution/add`,
      data
    );
  }

  deleteInstitution(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiURL}/institution/delete/` + id
    );
  }

  updateInstitution(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiURL}/institution/update`,
      data
    );
  }

  getAllInstitutionWithDelay() {
    setTimeout(() => {
      this.onGetAllInstitution();
    }, 500);
  }

  createInstitutionFormData(
    currentInstitutionName: string,
    newData: InstitutionModel
  ): FormData {
    const formData = new FormData();
    formData.append('currentInstitutionName', currentInstitutionName);
    formData.append('institutionName', newData.institutionName);
    formData.append('description', newData.description);
    return formData;
  }

  onGetAllInstitution() {
    this.institutionTableService.showTableLoading();
    this.institutionDispatch._InstitutionGetDispatch();
  }

  onAddInstitution(data: InstitutionModel) {
    this.institutionDispatch._InstitutionAddDispatch(data);
  }

  onDeleteInstitution() {
    this.institutionDispatch._InstitutionDeleteDispatch(this.existingData.id);
  }

  onUpdateInstitution(payload: FormData) {
    this.institutionDispatch._InstitutionUpdateDispatch(
      this.existingData.id,
      payload,
      this.existingData
    );
  }

  openDialog() {
    this.dialog.open(InstitutionCreateDialogComponent, this.matDialogConfig);
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    return this.dialog.closeAll();
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
