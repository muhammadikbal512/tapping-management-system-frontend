import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  apiUrl = environment.core236

  constructor(private http: HttpClient) { }

  getAllTransactionList() {
    return this.http.get<TransactionMessageModel[]>(`${this.apiUrl}/Transaction/list`).pipe(map(response => {
      return response;
    }));
  }




}
