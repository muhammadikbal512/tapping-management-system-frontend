import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { InstitutionTableService } from 'src/app/modules/services/module-services/institution-table.service';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';
import { InstitutionState } from 'src/app/state-configuration/modules/user-management/institution/institution.state';

@Component({
  selector: 'app-table-institution',
  templateUrl: './table-institution.component.html',
  styleUrls: ['./table-institution.component.css'],
})
export class TableInstitutionComponent implements OnInit {
  constructor(
    private instutitionTableService: InstitutionTableService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {
    this.getAllInstitution();
  }

  getAllInstitution() {
    this.institutionService.onGetAllInstitution();
  }

  onRowSelect(data: any) {
    this.institutionService.existingData = data.data;
  }

  refreshTable() {
    this.getAllInstitution();
  }

  showDialog() {
    this.institutionService.buttonStatus = 'create';
    this.institutionService.openDialog();
  }

  get cols() {
    return this.instutitionTableService.cols;
  }

  get loading() {
    return this.instutitionTableService.loading;
  }

  get institutions() {
    return this.instutitionTableService.institutions;
  }
}
