import { Component, OnInit } from '@angular/core';
import { AidConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration-table.service';
import { AidConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration.service';

@Component({
  selector: 'app-aid-config-table',
  templateUrl: './aid-config-table.component.html',
  styleUrls: ['./aid-config-table.component.css'],
})
export class AidConfigTableComponent implements OnInit {
  constructor(
    private aidConfigService: AidConfigurationService,
    private aidConfigTableService: AidConfigurationTableService
  ) {}

  ngOnInit(): void {}

  refreshTable() {}

  showDialog() {
    this.aidConfigService.openDialog();
    this.aidConfigService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {}

  get cols() {
    return this.aidConfigTableService.cols;
  }

  get loading() {
    return this.aidConfigTableService.loading;
  }

  get aidConfigs() {
    return this.aidConfigTableService.aidConfigs;
  }
}
