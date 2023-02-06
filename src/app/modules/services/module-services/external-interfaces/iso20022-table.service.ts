import { Injectable } from '@angular/core';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';

@Injectable({
  providedIn: 'root',
})
export class Iso20022TableService {
  iso2022!: Iso20022Model[];
  loading: boolean = true;
  cols = [
    { field: 'name', header: 'Header' },
    { field: 'description', header: 'Description' },
  ];
  constructor() {}

  setRowData(data: Iso20022Model[]) {
    this.iso2022 = data;
  }
}
