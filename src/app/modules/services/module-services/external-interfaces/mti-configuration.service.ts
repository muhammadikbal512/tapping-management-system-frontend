import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';
import { MtiConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/mti-configuration/widgets/mti-config-create-update-dialog/mti-config-create-update-dialog.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MtiConfigurationService {
  buttonStatus: string = '';
  apiUrl: string = environment.core236;
  existingData: MtiConfigurationModel = new MtiConfigurationModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getAllMtiConfig() {
    return this.http.get<MtiConfigurationModel[]>(
      `${this.apiUrl}/supported_mti/getAll`
    );
  }

  addMtiConfig(data: MtiConfigurationModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/supported_mti/add`,
      data
    );
  }

  updateMtiConfig(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/supported_mti/update`,
      data
    );
  }

  deleteMtiConfig(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/supported_mti/delete/` + id
    );
  }

  onGetAllMtiConfig() {}

  onAddMtiConfig() {}

  onUpdateMtiConfig() {}

  onDeleteMtiConfig() {}

  openDialog() {
    this.dialog.open(MtiConfigCreateUpdateDialogComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: MtiConfigurationModel) {
    this.existingData = data;
  }
}
