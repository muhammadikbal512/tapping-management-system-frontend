import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  apiUrl = environment.core236

  constructor(private http: HttpClient) { }

  getAllTransactionList() {
    return this.http.get<TransactionMessageInterface[]>(`${this.apiUrl}/Transaction/list`)
  }




}
