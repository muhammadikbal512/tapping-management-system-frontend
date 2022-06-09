import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CreateDialogNdcComponent } from '../../module/external-interface/ndc/widgets/create-dialog-ndc/create-dialog-ndc.component';

@Injectable({
  providedIn: 'root'
})
export class NdcService {
  dialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  openDialog() {
    this.dialog.open(CreateDialogNdcComponent, this.dialogConfig)
  }

  getCurrentDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
