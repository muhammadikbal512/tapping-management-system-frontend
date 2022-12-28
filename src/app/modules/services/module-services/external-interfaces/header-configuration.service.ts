import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HeaderConfigCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/header-configuration/widgets/header-config-create-update-dialog/header-config-create-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class HeaderConfigurationService {
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getAllHeaderConfigs() {}

  openDialog() {
    this.dialog.open(
      HeaderConfigCreateUpdateDialogComponent,
      this.dialogConfig
    );
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
