import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InstitutionTableService } from 'src/app/modules/services/module-services/institution-table.service';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css'],
})
export class InstitutionComponent implements OnInit, AfterViewInit {
  institutionUser: boolean = false;
  constructor(
    private institutionTableService: InstitutionTableService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  onPageSizeChanged() {
    const value = <HTMLInputElement>document.getElementById('page-size');

    this.institutionTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';

    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  searchTextFilter() {
    this.institutionTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.institutionService.getAllInstitutionWithDelay();
  }

  openDialog() {
    this.institutionService.buttonStatus = 'create';
    this.institutionService.openDialog();
  }
}
