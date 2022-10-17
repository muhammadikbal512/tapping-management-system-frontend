import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TypeTableService } from 'src/app/modules/services/module-services/type-table.service';
import { TypeService } from 'src/app/modules/services/module-services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
})
export class TypeComponent implements OnInit, AfterViewInit {
  constructor(
    private typeService: TypeService,
    private typeTableService: TypeTableService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  onPageSizeChanged() {
    const value = <HTMLInputElement>document.getElementById('page-size');

    this.typeTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';

    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }
  refreshTable() {
    this.typeService.getAllTypeWithDelay();
  }

  searchTextFilter() {
    this.typeTableService.onFilter('search-filter');
  }

  openDialog() {
    this.typeService.openDialog();
  }
}
