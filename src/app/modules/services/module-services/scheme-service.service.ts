import { Injectable } from '@angular/core';
import { SchemeModel } from 'src/app/model/modules-model/scheme.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateDialogSchemeComponent } from '../../module/user-management/private-scheme/widgets/create-dialog-scheme/create-dialog-scheme.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { SchemeTableService } from './scheme-table.service';
import { SchemeDispatch } from 'src/app/state-configuration/modules/user-management/scheme/scheme.dispatch';

@Injectable({
  providedIn: 'root',
})
export class SchemeServiceService {
  buttonStatus: string = '';
  apiUrl: string = environment.core236;
  existingData: SchemeModel = new SchemeModel();
  matDialogConfig: MatDialogConfig = {
    width: '55%',
    autoFocus: true,
  };
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private schemeTableService: SchemeTableService,
    private schemeDispatch: SchemeDispatch
  ) {}

  getAllScheme() {
    return this.http.get<SchemeModel[]>(`${this.apiUrl}/Scheme/list`);
  }

  delete(id: number) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/Scheme/delete`,
      id
    );
  }

  getAllSchemeWithDelay() {
    setTimeout(() => {
      this.onGetAllScheme();
    }, 500);
  }

  onGetAllScheme() {
    this.schemeDispatch._SchemeGetDispatch();
    this.schemeTableService.showTableLoading();
  }

  openDialog() {
    this.dialog.open(CreateDialogSchemeComponent, this.matDialogConfig);
  }

  currentDialogStatus() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
