import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/iso-field-configuration-table.service';
import { CreateUpdateIso8583FieldFormComponent } from './widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';

@Component({
  selector: 'app-iso8583-field-configuration',
  templateUrl: './iso8583-field-configuration.component.html',
  styleUrls: ['./iso8583-field-configuration.component.css'],
})
export class Iso8583FieldConfigurationComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    public isoFieldConfigurationService: IsoFieldConfigurationService,
    public isoFieldConfigurationTableService: IsoFieldConfigurationTableService
  ) {}

  ngOnInit(): void {}

  onFilterTextBoxChange() {
    this.isoFieldConfigurationTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.isoFieldConfigurationService.getAllIsoFieldConfigurationWithDelay();
  }

  openDialog() {
    this.isoFieldConfigurationService.buttonStatus = 'create';
    this.isoFieldConfigurationService.openDialog();
  }
}
