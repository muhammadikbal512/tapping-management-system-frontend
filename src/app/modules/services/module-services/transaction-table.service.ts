import { Injectable } from '@angular/core';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionTableService {
  eventCollectors!: EventCollectorModel[];
  loading: boolean = true;
  constructor() {}

  cols = [
    { field: 'timestamp', header: 'Time Stamp' },
    { field: 'srcAddress', header: 'Src Address' },
    { field: 'dstAddress', header: 'Dst Address' },
    { field: 'flag', header: 'Flag' },
    { field: 'typeMessage', header: 'Type Message' },
    { field: 'status', header: 'Status' },
    { field: 'incidentDetails', header: 'Incident Details' },
  ];

  setRowData(data: EventCollectorModel[]) {
    this.eventCollectors = data;
  }

  
}

