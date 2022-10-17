import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/roles-table.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit, AfterViewInit {
  constructor(
    private roleService: RolesService,
    private roleTableService: RolesTableService
  ) {}

  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  ngOnInit(): void {}

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.roleTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  onFilterTextBoxChange() {
    this.roleTableService.onFilter('search-input')
  }

  refreshTable() {
    this.roleService.getAllRolesWithDelay();
  }

  editDialog() {
    this.roleService.editDialog();
  }

  showDialog() {
    this.roleService.buttonStatus = 'create';
    this.roleService.openDialog();
  }
}
