import { Injectable } from '@angular/core';
import { TypeModel } from 'src/app/model/modules-model/type.model';

@Injectable({
  providedIn: 'root',
})
export class TypeTableService {
  loading: boolean = true;
  types!: TypeModel[];

  constructor() {}

  cols = [{ field: 'typeName', header: 'Type Name' }];

  setRowData(data: TypeModel[]) {
    this.types = data;
  }
}
