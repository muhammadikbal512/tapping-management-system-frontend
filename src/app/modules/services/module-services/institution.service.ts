import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { InstitutionDispatch } from 'src/app/state-configuration/modules/user-management/institution/institution.dispatch';
import { InstitutionTableService } from './institution-table.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  apiUrl: string = environment.core236;
  existingData: InstitutionModel = new InstitutionModel();
  buttonStatus: string = '';
  constructor(
    private http: HttpClient,
    private institutionTableService: InstitutionTableService,
    private institutionDispatch: InstitutionDispatch,
    private dialog: MatDialog
  ) {}

  getAllInstitution() {
    return this.http.get<InstitutionModel[]>(
      `${this.apiUrl}/institutions/list`
    );
  }

  deleteInstitution(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/institutions/delete/` + id
    );
  }

  addInstitution(data: InstitutionModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/institutions/add`,
      data
    );
  }

  updateInstitution(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/institutions/update`,
      data
    );
  }

  getAllInstitutionWithDelay() {
    setTimeout(() => {
      this.onGetAllInstitution();
    }, 500);
  }

  createInstitutionFormData(newData: InstitutionModel): FormData {
    const formData = new FormData();
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

  onUpdateInstitution(data: FormData) {
    this.institutionDispatch._InstitutionUpdateDispatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
