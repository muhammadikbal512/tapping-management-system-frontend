import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { Iso8583FieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';




@Component({
  selector: 'app-create-update-iso8583-field-form',
  templateUrl: './create-update-iso8583-field-form.component.html',
  styleUrls: ['./create-update-iso8583-field-form.component.css'],
})
export class CreateUpdateIso8583FieldFormComponent implements OnInit {
  form!: FormGroup;
  disableStatus: boolean = false;
  showClearButton: boolean = false;
  dialect: Iso8583DialectMsgTemplate[] = [];
  transaction: TransactionParametersModel[] = [];
  Iso8583FieldModel: Iso8583FieldModel = new Iso8583FieldModel();
  mapRadioChangeValue = new Map<number, string>();

  constructor(
    private iso5853DialectService: Iso8583DialectService,
    public isoFieldConfigurationService: IsoFieldConfigurationService,
    private fb: FormBuilder,
    private transactionParametersService: TransactionParametersService
  ) {}

  ngOnInit(): void {
    this.onGetDialect();
    this.onGetAttribute();
  }

  createForm() {
    this.form = this.fb.group({
      isoFieldId: ['', Validators.required],
      tagNumber: ['', Validators.required],
      dialectId: ['', Validators.required],
      attributeId: ['', Validators.required],
      isTagNumber: ['', Validators.required],
    })
  }

  setNewDataToModel(): Iso8583FieldModel{
    
    return this.Iso8583FieldModel
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  onUpdateIsoField() {

  }

  onCreateIsoField() {
    
  }

  onGetDialect() {
    this.iso5853DialectService.getAllIso8583Dialect().subscribe((response) => {
      this.dialect = response;
    });
  }

  onGetAttribute() {
    this.transactionParametersService.getAllParametersList().subscribe((response) => {
      this.transaction = response;
    })
  }

  AddIso8583FieldConfig(data: any) {}

  get isoFieldId() {
    return this.form.controls['attributeId'];
  }

  get tagNumber() {
    return this.form.controls['isTagNumber'];
  }

  get dialectId() {
    return this.form.controls['dialectId'];
  }

  get attributeId() {
    return this.form.controls['isoFieldId'];
  }

  get isTagNumber() {
    return this.form.controls['tagNumber'];
  }
}
