import { Injectable } from '@angular/core';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingTableService {
  responseMappings!: ResponseMappingModel[];
  loading: boolean = true;
  cols = [
    { field: 'respCode', header: 'Response Code' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: any) {
    this.responseMappings = data;
  }
}
