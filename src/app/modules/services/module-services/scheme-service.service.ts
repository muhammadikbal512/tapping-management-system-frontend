import { Injectable } from '@angular/core';
import { SchemeModel } from 'src/app/model/modules-model/scheme.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateDialogSchemeComponent } from '../../module/user-management/private-scheme/widgets/create-dialog-scheme/create-dialog-scheme.component';

@Injectable({
  providedIn: 'root'
})
export class SchemeServiceService {
  buttonStatus: string = '';
  matDialogConfig: MatDialogConfig = {
    width: '55%',
    disableClose: true,
    autoFocus: true
  }
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CreateDialogSchemeComponent, this.matDialogConfig)
  }

  currentDialogStatus() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll(); 
  }
}
