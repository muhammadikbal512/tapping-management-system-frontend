import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-group-table.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-group.service';
@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css'],
})
export class UserGroupComponent implements OnInit, AfterViewInit {
  constructor(
    private UserGroupService: UserGroupService,
    private userGroupTableService: UserGroupTableService
  ) {}

  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  ngOnInit(): void {}

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.querySelector('page-size')).value;

    this.userGroupTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  openDialog() {
    this.UserGroupService.buttonStatus = 'create';
    this.UserGroupService.openDialog();
  }

  onFilterTextBoxChange() {
    this.userGroupTableService.onFilter('search-filter')
  }

  refreshTable() {
    this.UserGroupService.getAllUserGroupWithDelay();
  }
}
