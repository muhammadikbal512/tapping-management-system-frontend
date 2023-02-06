import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Iso8583SubFieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-field-configuration-table.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-field-configuration.service';

@Component({
  selector: 'app-subfield-table',
  templateUrl: './subfield-table.component.html',
  styleUrls: ['./subfield-table.component.css'],
})
export class SubfieldTableComponent implements OnInit, AfterViewInit {
  subFieldModel: Iso8583SubFieldModel[] = [];

  constructor(
    private isoFieldTableService: IsoFieldConfigurationTableService,
    private isoFieldService: IsoFieldConfigurationService
  ) {}
  ngAfterViewInit(): void {
    
  }

  getSubFieldConfig() {
    this.isoFieldService.onGetIsoSubFieldConfiguration()
  }

  onRowSelect(event: any) {
    this.isoFieldService.subFieldData = event.data;
    console.log(event.data)
  }

  showDialog() {
    this.isoFieldService.openSubFieldDialog();
    this.isoFieldService.buttonStatusSubField = 'create';
  }

  ngOnInit(): void {
    this.getSubFieldConfig();
  }

  get loading() {
    return this.isoFieldTableService.loading;
  }

  get cols() {
    return this.isoFieldTableService.subfieldCols;
  }

  get subFields() {
    return this.isoFieldTableService.subFields
  }
}
