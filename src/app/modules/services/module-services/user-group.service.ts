import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UserGroupComponent } from '../../module/user-management/user-group/user-group.component';
@Injectable({
  providedIn: 'root'
})
export class UserGroupService {
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    width: '55%',
  };
  buttonStatus: string = '';
  constructor(private dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(UserGroupComponent, this.dialogConfig)
  }
}
