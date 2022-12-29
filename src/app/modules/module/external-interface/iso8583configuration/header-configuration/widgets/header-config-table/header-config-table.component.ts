import { Component, OnInit } from '@angular/core';
import { HeaderConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration-table.service';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration.service';

@Component({
  selector: 'app-header-config-table',
  templateUrl: './header-config-table.component.html',
  styleUrls: ['./header-config-table.component.css'],
})
export class HeaderConfigTableComponent implements OnInit {
  constructor(
    private headerTableService: HeaderConfigurationTableService,
    private headerService: HeaderConfigurationService
  ) {}

  ngOnInit(): void {
    this.getAllHeaderConfigs();
  }

  getAllHeaderConfigs() {
    this.headerService.onGetAllHeaderConfig();
  }

  refreshTable() {}

  showDialog() {
    this.headerService.openDialog();
    this.headerService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {}

  get cols() {
    return this.headerTableService.cols;
  }

  get loading() {
    return this.headerTableService.loading;
  }

  get headerConfigs() {
    return this.headerTableService.headerConfigs;
  }
}
