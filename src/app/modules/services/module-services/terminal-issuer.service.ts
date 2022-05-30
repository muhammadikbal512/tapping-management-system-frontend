import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TerminalListIssuerComponent } from '../../module/issuer/terminal-list/terminal-list.component';

@Injectable({
  providedIn: 'root'
})
export class TerminalIssuerService {

  matDialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  openDialog() {
    this.dialog.open(TerminalListIssuerComponent, this.matDialogConfig);
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
