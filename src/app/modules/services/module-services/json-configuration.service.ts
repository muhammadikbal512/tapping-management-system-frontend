import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateDialogJsonComponent } from '../../module/external-interface/json-configuration/widgets/create-dialog-json/create-dialog-json.component';


@Injectable({
  providedIn: 'root'
})
export class JsonConfigurationService {
  dialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog) { }

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
