import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MtiConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/mti-configuration/widgets/mti-config-create-update-dialog/mti-config-create-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MtiConfigurationService {
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getAllTransactionTypes() {}

  openDialog() {
    this.dialog.open(MtiConfigCreateUpdateDialogComponent, this.dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
