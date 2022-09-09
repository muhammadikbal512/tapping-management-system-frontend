import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { UserTableService } from 'src/app/modules/services/module-services/user-table.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, AfterViewInit {
  constructor(
    private userService: UserService,
    private userTableService: UserTableService
  ) {}
  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  ngOnInit(): void {}

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.userTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  onFilterTextBoxChange() {
    this.userTableService.onFilter('search-filter')
  }

  showDialog() {
    this.userService.buttonStatus = 'create';
    this.userService.openDialog();
  }

  refreshTable() {
    this.userService.getAllUserWithDelay()
  }

}
