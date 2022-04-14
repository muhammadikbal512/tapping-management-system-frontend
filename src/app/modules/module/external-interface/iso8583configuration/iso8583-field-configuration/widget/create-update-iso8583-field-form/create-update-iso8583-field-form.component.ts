import { Component, OnInit } from '@angular/core';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service'

@Component({
  selector: 'app-create-update-iso8583-field-form',
  templateUrl: './create-update-iso8583-field-form.component.html',
  styleUrls: ['./create-update-iso8583-field-form.component.css']
})
export class CreateUpdateIso8583FieldFormComponent implements OnInit {
  dialect: Iso8583DialectMsgTemplate[] = [];
  mapRadioChangeValue = new Map<number, string>();

  constructor(private iso5853DialectService: Iso8583DialectService, private isoFieldConfigurationService: IsoFieldConfigurationService) {
    
}

  ngOnInit(): void {
    this.onGetDialect();
  }

  onGetDialect() {
    this.iso5853DialectService.getAllIso8583Dialect().subscribe((response) => {
      this.dialect = response
    })
  }

  AddIso8583FieldConfig(data: any) {
    
  }
  

}
