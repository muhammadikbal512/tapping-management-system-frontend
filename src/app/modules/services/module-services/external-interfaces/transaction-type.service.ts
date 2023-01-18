import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';
import { TransactionTypeCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-create-update-dialog/transaction-type-create-update-dialog.component';
import { TransTypeMappingDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/transaction-type-mapping/trans-type-mapping.dispatch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionTypeService {
  apiUrl: string = environment.core236;
  buttonStatus: string = '';
  existingData: TransactionTypeModel = new TransactionTypeModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private transTypeDispatch: TransTypeMappingDispatch
  ) {}

  getAllTransactionTypes() {
    return this.http.get<HttpResponseData<TransactionTypeModel>>(
      `${this.apiUrl}/trans_type_mapping/getAll`
    );
  }

  addTransactionType(data: TransactionTypeModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/trans_type_mapping/add`,
      data
    );
  }

  updateTransactionType(data: TransactionTypeModel) {
    return this.http.post<HttpResponseData<any>>(
      `${this.apiUrl}/trans_type_mapping/update`,
      data
    );
  }

  deleteTransactionType(id: number) {
    return this.http.delete<HttpResponseData<any>>(
      `${this.apiUrl}/trans_type_mapping/delete/` + id
    );
  }

 
  onGetAllTransactionType() {
    this.transTypeDispatch._TransactionTypeMappingGetDispatch();
  }

  onGetAllIsoConfiguration() {
    this.transTypeDispatch._TransactionTypeMappingGetIsoConfig();
  }

  onAddTransactionType(data: TransactionTypeModel) {
    this.transTypeDispatch._TransactionTypeMappingAddDispatch(data);
  }

  onUpdateTransactionType(payload: TransactionTypeModel) {
    this.transTypeDispatch._TransactionTypeMappingUpdateDispatch(payload);
  }

  onDeleteTransactionType() {
    this.transTypeDispatch._TransactionTypeMappingDeleteDispatch(
      this.existingData.id
    );
  }

  openDialog() {
    this.dialog.open(
      TransactionTypeCreateUpdateDialogComponent,
      this.dialogConfig
    );
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: TransactionTypeModel) {
    this.existingData = data;
  }
}
