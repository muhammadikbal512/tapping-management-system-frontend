import { Component, OnInit } from '@angular/core';
import { MtiConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration-table.service';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration.service';

@Component({
  selector: 'app-mti-config-table',
  templateUrl: './mti-config-table.component.html',
  styleUrls: ['./mti-config-table.component.css'],
})
export class MtiConfigTableComponent implements OnInit {
  constructor(
    private mtiConfigService: MtiConfigurationService,
    private mtiConfigTableService: MtiConfigurationTableService
  ) {}

  ngOnInit(): void {}

  onRowSelect(event: any) {}

  refreshTable() {}

  showDialog() {
    this.mtiConfigService.openDialog();
    this.mtiConfigService.buttonStatus = 'create';
  }

  get cols() {
    return this.mtiConfigTableService.cols;
  }

  get mtiConfigs() {
    return this.mtiConfigTableService.mtiConfigs;
  }

  get loading() {
    return this.mtiConfigTableService.loading;
  }
}
