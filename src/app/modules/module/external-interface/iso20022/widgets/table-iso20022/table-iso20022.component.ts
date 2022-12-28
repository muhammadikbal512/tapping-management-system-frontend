import { Component, OnInit } from '@angular/core';
import { Iso20022TableService } from 'src/app/modules/services/module-services/iso20022-table.service';
import { Iso20022Service } from 'src/app/modules/services/module-services/iso20022.service';

@Component({
  selector: 'app-table-iso20022',
  templateUrl: './table-iso20022.component.html',
  styleUrls: ['./table-iso20022.component.css'],
})
export class TableIso20022Component implements OnInit {
  constructor(
    private isoTableService: Iso20022TableService,
    private isoService: Iso20022Service
  ) {}

  ngOnInit(): void {
    this.getAllIso2022();
  }

  getAllIso2022() {
    this.isoService.onGetAllIso20022();
  }

  refreshTable() {
    this.isoTableService.loading = true;
    this.getAllIso2022();
  }

  showDialog() {
    this.isoService.buttonStatus = 'create';
    this.isoService.openDialog();
  }

  onRowSelect(data: any) {
    this.isoService.ExistingData = data.data;
  }

  get cols() {
    return this.isoTableService.cols;
  }

  get loading() {
    return this.isoTableService.loading;
  }

  get iso2022() {
    return this.isoTableService.iso2022;
  }
}
