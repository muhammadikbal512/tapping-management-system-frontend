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
  constructor(
    private http: HttpClient,
    private institutionTableService: InstitutionTableService,
    private institutionDispatch: InstitutionDispatch,
    private dialog: MatDialog
  ) {}

  getAllInstitution() {
    return this.http.get<InstitutionModel>(`${this.apiUrl}/institution/list`);
  }

  deleteInstitution(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/institution/delete/` + id
    );
  }

  addInstitution(data: InstitutionModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/institution/create`,
      data
    );
  }

  updateInstitution(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/institution/update`,
      data
    );
  }

  getAllInstitutionWithDelay() {
    setTimeout(() => {
      this.onGetAllInstitution();
    }, 500);
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

  onUpdateInstitution(data: FormData, dataState: InstitutionModel) {
    this.institutionDispatch._InstitutionUpdateDispatch(
      this.existingData.id,
      data,
      dataState
    );
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
