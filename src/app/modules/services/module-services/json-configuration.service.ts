import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateDialogJsonComponent } from '../../module/external-interface/json-configuration/widgets/create-dialog-json/create-dialog-json.component';
import { JsonConfigModel } from 'src/app/model/modules-model/json-configuration.model';
import { environment } from 'src/environments/environment';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { JsonConfigurationTableService } from './json-configuration-table.service';
import { JsonConfigurationDispatch } from 'src/app/state-configuration/modules/external-interfaces/json-configuration/json-configuration.dispatch';

@Injectable({
  providedIn: 'root',
})
export class JsonConfigurationService {
  existingData: JsonConfigModel = new JsonConfigModel()
  buttonStatus: string = '';
  apiUrl: string = environment.core236;
  dialogConfig: MatDialogConfig = {
    width: '55%',
  };
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private jsonTableService: JsonConfigurationTableService,
    private jsonDispatch: JsonConfigurationDispatch
  ) {}

  getAllJsonConfig() {
    return this.http.get<JsonConfigModel[]>(`${this.apiUrl}/JsonConfig/All`);
  }

  deleteJsonConfig(id: number) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/JsonConfig/delete`,
      id
    );
  }

  getAllJsonConfigWithDelay() {
    setTimeout(() => {
      this.onGetAllJsonConfig();
    }, 500);
  }

  onGetAllJsonConfig() {
    this.jsonTableService.showTableLoading();
    this.jsonDispatch._JsonConfigurationGetDispatch();
  }

  onDeleteJsonConfig() {
    this.jsonDispatch._JsonConfigurationDeleteDispatch(this.existingData.id);
  }

  openDialog() {
    this.dialog.open(CreateDialogJsonComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
