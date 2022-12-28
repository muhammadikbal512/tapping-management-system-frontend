import { Component, OnInit } from '@angular/core';
import { NdcTableService } from 'src/app/modules/services/module-services/ndc-table.service';
import { NdcService } from 'src/app/modules/services/module-services/ndc.service';

@Component({
  selector: 'app-table-ndc',
  templateUrl: './table-ndc.component.html',
  styleUrls: ['./table-ndc.component.css'],
})
export class TableNdcComponent implements OnInit {
  constructor(
    private ndcTableService: NdcTableService,
    private ndcService: NdcService
  ) {}

  ngOnInit(): void {
    this.getAllNdc();
  }

  getAllNdc() {
    this.ndcService.getAllNdcWithDelay();
  }

  refreshTable() {
    this.ndcTableService.loading = true;
    this.getAllNdc();
  }

  showDialog() {
    this.ndcService.buttonStatus = 'create';
    this.ndcService.openDialog();
  }

  onRowSelect(data: any) {
    this.ndcService.ExistingData = data.data;
  }

  get cols() {
    return this.ndcTableService.cols;
  }

  get ndcs() {
    return this.ndcTableService.ndcs;
  }

  get loading() {
    return this.ndcTableService.loading;
  }
}
