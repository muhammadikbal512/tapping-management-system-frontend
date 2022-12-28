import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AidConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/aid-configuration/widgets/aid-config-create-update-dialog/aid-config-create-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AidConfigurationService {
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AidConfigCreateUpdateDialogComponent, this.dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
