import { Component, OnInit } from '@angular/core';
import { Iso8583DialectTableServiceService } from 'src/app/modules/services/module-services/iso8583-dialect-table-service.service';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';

@Component({
  selector: 'app-iso8583-dialect-table',
  templateUrl: './iso8583-dialect-table.component.html',
  styleUrls: ['./iso8583-dialect-table.component.css'],
})
export class Iso8583DialectTableComponent implements OnInit {
  constructor(
    private iso8583DialectService: Iso8583DialectService,
    private iso8583DialectTableService: Iso8583DialectTableServiceService
  ) {}

  ngOnInit(): void {
    this.getAllDialects();
  }

  getAllDialects() {
    this.iso8583DialectService.onGetAllIso8583Dialect();
  }

  onRowSelect(data: any) {
    this.iso8583DialectService.ExistingData = data.data;
  }

  showDialog() {
    this.iso8583DialectService.openDialog();
    this.iso8583DialectService.buttonStatus = 'create';
  }

  refreshTable() {
    this.iso8583DialectTableService.loading = true;
    this.getAllDialects();
  }

  get cols() {
    return this.iso8583DialectTableService.cols;
  }

  get loading() {
    return this.iso8583DialectTableService.loading;
  }

  get dialects() {
    return this.iso8583DialectTableService.dialects;
  }
}
