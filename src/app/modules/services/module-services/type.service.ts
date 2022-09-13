import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { TypeCreateDialogComponent } from '../../module/user-management/type/widgets/type-create-dialog/type-create-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    width: '55%',
  };

  buttonStatus: string = '';
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(TypeCreateDialogComponent, this.dialogConfig)
  }
}
