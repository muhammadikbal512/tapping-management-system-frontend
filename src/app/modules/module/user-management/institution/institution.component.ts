import { Component, OnInit } from '@angular/core';
import { InstitutionTableService } from 'src/app/modules/services/module-services/user-management/institution-table.service';
import { InstitutionService } from 'src/app/modules/services/module-services/user-management/institution.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css'],
})
export class InstitutionComponent implements OnInit {
  institutionUser: boolean = false;
  constructor(
    private institutionTableService: InstitutionTableService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {}

  get cols() {
    return this.institutionTableService.cols;
  }
}
