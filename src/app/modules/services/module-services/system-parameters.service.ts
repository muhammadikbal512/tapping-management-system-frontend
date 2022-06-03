import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CreateUpdateSystemParametersComponent } from '../../module/system/system-parameters/widgets/create-update-system-parameters/create-update-system-parameters.component';

@Injectable({
  providedIn: 'root'
})
export class SystemParametersService {
  private apiUrl = environment.core236;
  matDialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  
  openDialog() {
    this.dialog.open(CreateUpdateSystemParametersComponent, this.matDialogConfig);
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
