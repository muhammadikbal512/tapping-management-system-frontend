import { Component, OnInit } from '@angular/core';
import { InstitutionTableService } from 'src/app/modules/services/module-services/institution-table.service';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css'],
})
export class InstitutionComponent implements OnInit {
  constructor(
    private institutionTableService: InstitutionTableService,
    private institutionService: InstitutionService
  ) {}
  ngOnInit(): void {}


  searchTextFilter() {
    this.institutionTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.institutionService.getAllInstitutionWithDelay();
  }

  openDialog() {
    this.institutionService.buttonStatus = 'create'
   this.institutionService.openDialog();
  }
}
