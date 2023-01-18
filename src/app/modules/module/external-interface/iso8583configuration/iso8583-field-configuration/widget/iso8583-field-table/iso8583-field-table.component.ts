import { Component, OnInit } from '@angular/core';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration.service';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration-table.service';

@Component({
  selector: 'app-iso8583-field-table',
  templateUrl: './iso8583-field-table.component.html',
  styleUrls: ['./iso8583-field-table.component.css'],
})
export class Iso8583FieldTableComponent implements OnInit {
  constructor(
    private isoFieldConfigurationService: IsoFieldConfigurationService,
    private isoFieldConfigurationTableService: IsoFieldConfigurationTableService
  ) {}

  ngOnInit(): void {
    this.getAllIsoConfigs();
  }
  getAllIsoConfigs() {
    this.isoFieldConfigurationService.onGetAllIsoFieldConfiguration();
  }

  refreshTable() {
    this.isoFieldConfigurationTableService.loading = true;
    this.getAllIsoConfigs();
  }

  onRowSelect(data: any) {
    this.isoFieldConfigurationService.ExistingData = data.data;
    console.log(data.data)
  }

  showDialog() {
    this.isoFieldConfigurationService.buttonStatus = 'create';
    this.isoFieldConfigurationService.openDialog();
  }

  get cols() {
    return this.isoFieldConfigurationTableService.cols;
  }

  get loading() {
    return this.isoFieldConfigurationTableService.loading;
  }

  get fieldConfigs() {
    return this.isoFieldConfigurationTableService.isoConfigs;
  }
}
