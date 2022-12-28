import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { JsonConfigurationTableService } from 'src/app/modules/services/module-services/json-configuration-table.service';
import { JsonConfigurationService } from 'src/app/modules/services/module-services/json-configuration.service';

@Component({
  selector: 'app-table-json',
  templateUrl: './table-json.component.html',
  styleUrls: ['./table-json.component.css'],
})
export class TableJsonComponent implements OnInit {
  constructor(
    private jsonTableService: JsonConfigurationTableService,
    private jsonService: JsonConfigurationService
  ) {}

  ngOnInit(): void {
    this.getAllJsonConfig();
  }

  getAllJsonConfig() {
    this.jsonService.onGetAllJsonConfig();
  }

  refreshTable() {
    this.jsonTableService.loading = true;
    this.getAllJsonConfig();
  }

  onRowSelect(data: any) {
    this.jsonService.ExistingData = data.data
  }

  showDialog() {
    this.jsonService.buttonStatus = 'create';
    this.jsonService.openDialog();
  }

  get cols() {
    return this.jsonTableService.cols;
  }

  get jsonConfigs() {
    return this.jsonTableService.jsonConfigs;
  }

  get loading() {
    return this.jsonTableService.loading;
  }
}
