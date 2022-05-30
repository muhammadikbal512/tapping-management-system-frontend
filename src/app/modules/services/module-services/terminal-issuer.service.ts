import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TerminalListIssuerComponent } from '../../module/issuer/terminal-list/terminal-list.component';
import { environment } from 'src/environments/environment';
import { IssuerTerminalModel } from 'src/app/model/modules-model/issuer-terminal.model';


@Injectable({
  providedIn: 'root'
})
export class TerminalIssuerService {

  private apiUrl = environment.core236;

  matDialogConfig: MatDialogConfig = {
    width: '55%'
  }
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  getAllTerminalIssuer() {
    this.http.get<IssuerTerminalModel[]>(`${this.apiUrl}/here`)
  }

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
