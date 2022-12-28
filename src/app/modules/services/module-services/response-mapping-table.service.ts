import { Injectable } from '@angular/core';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingTableService {
  responseMappings!: ResponseMappingModel[];
  loading: boolean = true;
  cols = [
    { field: 'transactionType', header: 'Transaction Type' },
    { field: 'description', header: 'Description' },
    { field: 'configId', header: 'Config ID' },
  ];
  constructor() {}

  setRowData(data: any) {
    this.responseMappings = data;
  }
}
