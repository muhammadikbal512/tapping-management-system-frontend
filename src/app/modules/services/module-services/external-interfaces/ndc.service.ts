import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CreateDialogNdcComponent } from 'src/app/modules/module/external-interface/ndc/widgets/create-dialog-ndc/create-dialog-ndc.component';
import { NdcModel } from 'src/app/model/modules-model/ndc.model';
import { NdcTableService } from './ndc-table.service';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NdcDispatch } from 'src/app/state-configuration/modules/external-interfaces/ndc/ndc.dispatch';

@Injectable({
  providedIn: 'root',
})
export class NdcService {
  existingData: NdcModel = new NdcModel();
  buttonStatus: string = '';
  apiUrl: string = environment.core236;
  dialogConfig: MatDialogConfig = {
    width: '55%',
  };
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private ndcTableService: NdcTableService,
    private ndcDispatch: NdcDispatch
  ) {}

  getAllNdc() {
    return this.http.get<NdcModel[]>(`${this.apiUrl}/NDC/list`);
  }

  deleteNdc(id: number) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/NDC/delete`,
      id
    );
  }

  getAllNdcWithDelay() {
    setTimeout(() => {
      this.onGetAllNdc();
    }, 500);
  }

  onGetAllNdc() {
    this.ndcDispatch._NdcGetDispatch();
  }

  onDeleteNdc() {
    this.ndcDispatch._NdcDeleteDispatch(this.existingData.id)
  }

  openDialog() {
    this.dialog.open(CreateDialogNdcComponent, this.dialogConfig);
  }

  getCurrentDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: NdcModel) {
    this.existingData = data;
  }
}
