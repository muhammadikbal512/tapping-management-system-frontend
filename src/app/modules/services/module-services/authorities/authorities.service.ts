import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthoritiesModel } from 'src/app/model/modules-model/authorities.model';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class AuthoritiesService {
  private apiUrl = environment.core236;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getAllAuthorities() {
    return this.http.get<AuthoritiesModel[]>(`${this.apiUrl}/authority/list`);
  }

  getAllAuthoritiesWithDelay() {}

  onGetAuthorities() {}

  openDialog() {}

  getCurrentStatusDialog() {
    return this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
