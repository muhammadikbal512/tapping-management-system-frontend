import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { CreateUpdateArpComponent } from '../../module/system/application-parameters/arp/widgets/create-update-arp/create-update-arp.component';
import { ArpModel } from 'src/app/model/modules-model/arp.model';
import { ArpDispatch } from 'src/app/state-configuration/modules/system/arp/arp.dispatch';
import { AppParametersTableService } from './app-parameters-table.service';

@Injectable({
  providedIn: 'root',
})
export class AppParametersService {
  existingData: ArpModel = new ArpModel();
  buttonStatus: string = '';
  private apiUrl = environment.core236;
  dialogConfig: MatDialogConfig = {
    width: '55%',
  };
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private arpDispatch: ArpDispatch,
    private arpTableService: AppParametersTableService
  ) {}

  getArpAll() {
    return this.http.get<ArpModel[]>(`${this.apiUrl}/ARP/list`);
  }

  deleteArp(id: number) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/ARP/delete`,
      id
    );
  }

  getArpAllWithDelay() {
    setTimeout(() => {
      this.onGetArpAll();
    }, 500);
  }

  onGetArpAll() {
    this.arpTableService.showTableLoading();
    this.arpDispatch._ArpGetDispatch();
  }

  onDeleteArp() {
    this.arpDispatch._ArpDeleteDispatch(this.existingData.id);
  }

  openDialog() {
    this.dialog.open(CreateUpdateArpComponent, this.dialogConfig);
  }

  getCurrentDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
