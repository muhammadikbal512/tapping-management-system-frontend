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
    { field: '0', header: 'App Trans ID' },
    { field: '14', header: 'Src Address' },
    { field: '13', header: 'Dst Address' },
    { field: '2', header: 'Flag' },
    { field: 'typeMessage', header: 'Type Message' },
    { field: 'status', header: 'Status' },
    { field: 'incidentDetails', header: 'Incident Details' },
  ];

  setRowData(data: EventCollectorModel[]) {
    this.eventCollectors = data;
  }

  setTrans(data: any[]) {
    this.datasourceTransactions = data;
  }
}
