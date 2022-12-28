import { Injectable } from '@angular/core';
import { XmlConfigModel } from 'src/app/model/modules-model/xml-config.model';

@Injectable({
  providedIn: 'root',
})
export class XmlTableService {
  xmlConfigs!: XmlConfigModel[];
  loading: boolean = true;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: XmlConfigModel[]) {
    this.xmlConfigs = data
  }
}
