import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransactionParametersDispatch } from 'src/app/state-configuration/modules/transaction-parameters/transaction-parameters.dispatch';
import { TransactionParametersTableService } from './transaction-parameters-table.service';
import { TransactionParamDialogComponent } from '../../module/transaction/transaction-parameters/widget/transaction-param-dialog/transaction-param-dialog.component';
import { RowClickedEvent } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class TransactionParametersService {
  buttonStatus: string = '';
  private apiUrl = environment.core236;
  existingData: TransactionParametersModel = new TransactionParametersModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: false,
    width: '55%',
  };

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private transactionParametersDispatch: TransactionParametersDispatch,
    private transactionParametersTableService: TransactionParametersTableService
  ) {}

  getAllParametersList() {
    return this.http.get<TransactionParametersModel[]>(
      `${this.apiUrl}/TransactionParameters/list`
    );
  }

  addTransanctionParameter(data: TransactionParametersModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/TransactionParameters/add`,
      data
    );
  }

  updateTransactionParameter(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/TransactionParameters/update`,
      data
    );
  }

  deleteTransactionParameters(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/TransactionParameters/delete/` + id
    );
  }

  getAllTransactionParametersWithDelay() {
    setTimeout(() => {
      this.onGetAllTransactionParameters();
    }, 500);
  }

  onGetAllTransactionParameters() {
    this.transactionParametersTableService.showTableLoading();
    this.transactionParametersDispatch._TransactionParametersGetDispatch();
  }

  onCreateTransactionParameters(data: TransactionParametersModel) {
    this.transactionParametersDispatch._TransactionParametersAddDispatch(data);
  }

  onUpdateTransactionParameters(data: FormData) {
    this.transactionParametersDispatch._TransactionParametersUpdateDipatch(
      this.existingData.id,
      data,
      this.existingData
    );
  }

  onDeleteTransactionParameters() {
    this.transactionParametersDispatch._TransactionParametersDeleteDispatch(this.existingData.id);
  }

  createTransactionParametersFormData(
    currentAttributeName: string,
    newData: TransactionParametersModel
  ): FormData {
    const formData = new FormData();
    formData.append('currentAttributeName', currentAttributeName);
    formData.append('attributeName', newData.attributeName);
    formData.append('description', newData.description);
    return formData;
  }

  openDialog() {
    this.dialog.open(TransactionParamDialogComponent, this.dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data;
  }
}
