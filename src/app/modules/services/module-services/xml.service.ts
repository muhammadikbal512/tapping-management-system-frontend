import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateDialogXmlComponent } from '../../module/external-interface/xml-configuration/widgets/create-dialog-xml/create-dialog-xml.component';



@Injectable({
  providedIn: 'root'
})
export class XmlService {
  dialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  openDialog() {
    this.dialog.open(CreateDialogXmlComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
