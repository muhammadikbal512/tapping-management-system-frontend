import { Component, OnInit } from '@angular/core';
import { TypeTableService } from 'src/app/modules/services/module-services/type-table.service';
import { TypeService } from 'src/app/modules/services/module-services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
})
export class TypeComponent implements OnInit {
  constructor(
    private typeService: TypeService,
    private typeTableService: TypeTableService
  ) {}

  ngOnInit(): void {}

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
