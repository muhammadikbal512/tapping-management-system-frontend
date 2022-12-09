import { Injectable } from '@angular/core';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';

@Injectable({
  providedIn: 'root',
})
export class Iso8583DialectTableServiceService {
  dialects!: Iso8583DialectMsgTemplate[];
  loading: boolean = true;
  cols  = [
    {field: 'nameType', header: 'Name Type'},
    {field: 'description', header: 'Description'},
  ]
  
  constructor() {}

  setRowData(data: Iso8583DialectMsgTemplate[]) {
    this.dialects = data;
  }
}
