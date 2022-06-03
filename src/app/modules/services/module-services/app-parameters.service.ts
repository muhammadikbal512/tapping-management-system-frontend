import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { CreateUpdateArpComponent } from '../../module/system/application-parameters/arp/widgets/create-update-arp/create-update-arp.component';


@Injectable({
  providedIn: 'root'
})
export class AppParametersService {
  private apiUrl = environment.core236;
  dialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  getArpAll() {
    
  }

  openDialog() {
    this.dialog.open(CreateUpdateArpComponent, this.dialogConfig)
  }

  getCurrentDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
