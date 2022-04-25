import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import { Iso8583DialectTableServiceService } from 'src/app/modules/services/module-services/iso8583-dialect-table-service.service';

@Component({
  selector: 'app-iso8583-dialect',
  templateUrl: './iso8583-dialect.component.html',
  styleUrls: ['./iso8583-dialect.component.css'],
})
export class Iso8583DialectComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private iso8583DialectService: Iso8583DialectService,
    private iso8583DialectTableService: Iso8583DialectTableServiceService
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.iso8583DialectService.buttonStatus = 'create';
    this.iso8583DialectService.openDialog();
  }

  onFilterTextBoxChanged() {
    this.iso8583DialectTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.iso8583DialectService.onGetAllIso8583Dialect();
  }
}
