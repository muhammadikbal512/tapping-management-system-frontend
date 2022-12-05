import { Injectable } from '@angular/core';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';

@Injectable({
  providedIn: 'root',
})
export class InstitutionTableService {
  loading: boolean = true;
  institutions!: InstitutionModel[]
  cols = [

    { field: 'institutionName', header: 'Institution Name' },
    { field: 'description', header: 'Description' },
  ];

  
  constructor() {}

  setRowData(data: InstitutionModel[]) {
    this.institutions = data;
  }

}
