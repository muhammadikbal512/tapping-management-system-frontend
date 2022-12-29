import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TransactionTypeCreateUpdateDialogComponent } from 'src/app/modules/module/external-interface/iso8583configuration/transaction-type-mapping/transaction-type-create-update-dialog/transaction-type-create-update-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class TransactionTypeService {
  buttonStatus: string = '';
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    disableClose: true,
    width: '65%',
  };

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getAllTransactionTypes() {}

  openDialog() {
    this.dialog.open(
      TransactionTypeCreateUpdateDialogComponent,
      this.dialogConfig
    );
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
