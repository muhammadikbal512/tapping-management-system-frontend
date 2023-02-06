import { Injectable } from '@angular/core';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';

@Injectable({
  providedIn: 'root',
})
export class MessageFormatTableService {
  messageFormats!: Iso8583FormatModel[];
  loading: boolean = true;
  cols = [
    { field: 'messageFormat', header: 'Message Format'},
    { field: 'description', header: 'Description' },
  ];

  constructor() {}

  setRowData(data: Iso8583FormatModel[]) {
    this.messageFormats = data;
  }
  
}
