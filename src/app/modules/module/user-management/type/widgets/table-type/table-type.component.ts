import { Component, OnInit } from '@angular/core';
import { TypeTableService } from 'src/app/modules/services/module-services/type-table.service';
import { TypeService } from 'src/app/modules/services/module-services/type.service';

@Component({
  selector: 'app-table-type',
  templateUrl: './table-type.component.html',
  styleUrls: ['./table-type.component.css'],
})
export class TableTypeComponent implements OnInit {
  constructor(
    private typeService: TypeService,
    private typeTableService: TypeTableService
  ) {}

  ngOnInit(): void {
    this.getAllTypes();
  }

  getAllTypes() {
    this.typeService.onGetAllType();
  }

  onRowSelect(data: any) {
    this.typeService.existingData = data.data
  }

  refreshTable() {
    this.getAllTypes();
  }

  showDialog() {
    this.typeService.buttonStatus = 'create';
    this.typeService.openDialog();
  }

  get cols() {
    return this.typeTableService.cols;
  }

  get loading() {
    return this.typeTableService.loading;
  }

  get types() {
    return this.typeTableService.types;
  }
}
