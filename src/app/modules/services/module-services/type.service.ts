import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeModel } from 'src/app/model/modules-model/type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { environment } from 'src/environments/environment';
import { TypeDispatch } from 'src/app/state-configuration/modules/user-management/type/type.dispatch';
import { TypeTableService } from './type-table.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TypeCreateDialogComponent } from '../../module/user-management/type/widgets/type-create-dialog/type-create-dialog.component';
import { RowClickedEvent } from 'ag-grid-community/dist/lib/events';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  apiUrl = environment.core236;
  buttonStatus: string = '';
  existingData: TypeModel = new TypeModel();
  matDialogConfig: MatDialogConfig = {
    width: '55%',
    autoFocus: true,
  };
  constructor(
    private http: HttpClient,
    private typeDispatch: TypeDispatch,
    private typeTableService: TypeTableService,
    private dialog: MatDialog
  ) {}

  getAllType() {
    return this.http.get<TypeModel[]>(`${this.apiUrl}/type/list`);
  }

  addType(data: TypeModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/list/add`,
      data
    );
  }

  deleteType(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/list/delete` + id
    );
  }

  updateType(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/type/update`,
      data
    );
  }

  getAllTypeWithDelay() {
    setTimeout(() => {
      this.onGetAllType();
    }, 500);
  }

  createTypeFormData(currentTypeName: string, newData: TypeModel): FormData {
    const formData = new FormData();
    formData.append('currentTypeName', currentTypeName)
    formData.append('typeName', newData.typeName);
    return formData;
  }

  onGetAllType() {
    this.typeTableService.showTableLoading();
    this.typeDispatch._TypeGetDispatch();
  }

  onAddType(data: TypeModel) {
    this.typeDispatch._TypeAddDispatch(data);
  }

  onDeleteType() {
    this.typeDispatch._TypeDeleteDispatch(this.existingData.id);
  }

  onUpdateType(data: FormData) {
    this.typeDispatch._TypeUpdateDispatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  openDialog() {
    this.dialog.open(TypeCreateDialogComponent, this.matDialogConfig);
    this.buttonStatus = 'create'
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
