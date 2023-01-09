import { Component, OnInit } from '@angular/core';
import { IsoConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration-table.service';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration.service';

@Component({
  selector: 'app-iso-config-table',
  templateUrl: './iso-config-table.component.html',
  styleUrls: ['./iso-config-table.component.css'],
})
export class IsoConfigTableComponent implements OnInit {
  constructor(
    private isoConfigService: IsoConfigurationService,
    private isoConfigTableService: IsoConfigurationTableService
  ) {}

  refreshTable() {
    this.isoConfigTableService.loading = true;
    this.getAllIsoConfig();
  }

  showDialog() {
    this.isoConfigService.openDialog();
    this.isoConfigService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.isoConfigService.existingData = event.data;
  }

  ngOnInit(): void {
    this.getAllIsoConfig();
  }

  getAllIsoConfig() {
    this.isoConfigService.onGetAllIsoConfig();
  }

  get cols() {
    return this.isoConfigTableService.cols;
  }

  get loading() {
    return this.isoConfigTableService.loading;
  }

  get isoConfigs() {
    return this.isoConfigTableService.isoConfigs;
  }
}
