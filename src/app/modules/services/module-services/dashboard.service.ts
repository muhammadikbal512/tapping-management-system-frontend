import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = environment.core236

  constructor(private http: HttpClient) { }

  getListInterfaces() {
    return this.http.get<any>(`${this.apiUrl}/apps/interfaceslist`).pipe(map((response) => {
      return response;
    }));
  }
}
