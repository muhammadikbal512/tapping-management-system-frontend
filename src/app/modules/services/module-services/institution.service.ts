import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InstitutionCreateDialogComponent } from '../../module/user-management/institution/widgets/institution-create-dialog/institution-create-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    width: '55%',
  };
  buttonStatus: string = '';
  constructor(private dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(InstitutionCreateDialogComponent, this.dialogConfig)
  }
}
