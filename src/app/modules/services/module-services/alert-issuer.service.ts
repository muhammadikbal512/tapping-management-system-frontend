import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CreateDialogAlertIssuerComponent } from '../../module/issuer/alert-issuer/widget/create-dialog-alert-issuer/create-dialog-alert-issuer.component';

@Injectable({
  providedIn: 'root',
})
export class AlertIssuerService {
  matDialogConfig: MatDialogConfig = {
    width: '55%',
  };

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  showDialog() {
    this.dialog.open(CreateDialogAlertIssuerComponent, this.matDialogConfig);
  }

  getCurrentDialogs() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
