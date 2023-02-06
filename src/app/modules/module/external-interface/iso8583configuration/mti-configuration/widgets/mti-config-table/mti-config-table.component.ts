import { Component, OnInit } from '@angular/core';
import { MtiConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/mti-configuration-table.service';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/mti-configuration.service';

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

  ngOnInit(): void {
    this.getAllMtiConfig();
  }

  onRowSelect(event: any) {
    this.mtiConfigService.existingData = event.data;
    console.log(event.data);
  }

  refreshTable() {
    this.mtiConfigTableService.loading = true;
    this.getAllMtiConfig();
  }

  getAllMtiConfig() {
    this.mtiConfigService.onGetAllMtiConfig();
  }

  showDialog() {
    this.mtiConfigService.openDialog();
    this.mtiConfigService.buttonStatus = 'create';
  }

  get mtiConfigs() {
    return this.mtiConfigTableService.mtiConfigs;
  }

  get loading() {
    return this.mtiConfigTableService.loading;
  }
}
