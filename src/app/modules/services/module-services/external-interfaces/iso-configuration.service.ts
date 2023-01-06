import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { IsoConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/iso-configuration/widgets/iso-config-create-update-dialog/iso-config-create-update-dialog.component';
import { IsoConfigDispatch } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso-configuration/iso-config.dispatch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IsoConfigurationService {
  apiUrl: string = environment.core236;
  buttonStatus: string = '';
  existingData: IsoConfigurationModel = new IsoConfigurationModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private isoConfigDispatch: IsoConfigDispatch
  ) {}

  getAllIsoConfiguration() {
    return this.http.get<HttpResponseData<IsoConfigurationModel>>(
      `${this.apiUrl}/isoconfig/all`
    );
  }

  addIsoConfiguration(data: IsoConfigurationModel) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/isoconfig/add`,
      data
    );
  }

  updateIsoConfiguration(data: FormData) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/apiconfig/update`,
      data
    );
  }

  deleteIsoConfiguration(id: number) {
    return this.http.delete<CustomHttpResponseModel>(
      `${this.apiUrl}/apiconfig/delete/` + id
    );
  }

  onGetAllIsoConfig() {}

  openDialog() {
    this.dialog.open(IsoConfigCreateUpdateDialogComponent, this.dialogConfig);
  }
}
