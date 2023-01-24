import { Injectable } from '@angular/core';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionTableService {
  eventCollectors!: EventCollectorModel[];
  transactions!: any[];
  datasourceTransactions!: any[];
  totalRecords: number = 0;
  loading: boolean = true;
  constructor() {}

  cols = [
   
  ];
  

  setRowData(data: EventCollectorModel[]) {
    this.eventCollectors = data;
  }

  setTrans(data: any[]) {
    this.datasourceTransactions = data;
  }
}
