import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateUpdateIso20022Component } from '../../module/external-interface/iso20022/widgets/create-update-iso20022/create-update-iso20022.component';


@Injectable({
  providedIn: 'root'
})
export class Iso20022Service {
  dialogConfig: MatDialogConfig = {
    width: '55px'
  }
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CreateUpdateIso20022Component, this.dialogConfig)
  }

  getCurrentDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
