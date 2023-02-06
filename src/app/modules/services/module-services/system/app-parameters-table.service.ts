import { Injectable } from '@angular/core';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';
@Injectable({
  providedIn: 'root',
})
export class AppParametersTableService {
  Arps!: AppsParametersModel[];
  loading: boolean = true;
  cols = [
    { field: 'nameSeting', header: 'Name Seting' },
    { field: 'value', header: 'Value' },
  ];

  constructor() {}

  setRowData(data: AppsParametersModel[]) {
    this.Arps = data;
  }
}
