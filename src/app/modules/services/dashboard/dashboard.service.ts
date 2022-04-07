import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardInterface } from '../../module/dashboard/dashboard-interface/dashboard-interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = 'https://jsonplaceholder.typicode.com'
  

  constructor(private http: HttpClient) { }

  getData():Observable<DashboardInterface[]> {
    return this.http.get<DashboardInterface[]>(this.apiUrl + '/posts')
  }
}
