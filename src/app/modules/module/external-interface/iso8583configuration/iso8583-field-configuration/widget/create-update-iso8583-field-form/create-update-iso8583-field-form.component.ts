import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { IsoFieldConfigurationModel } from 'src/app/model/modules-model/iso-field-configuration.model';
import { DialectMsgTemplateGroup } from 'src/app/interface/modules/dialect-msg-template-group';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { ISO8583FieldState } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-field-configuration/iso8583-field.state';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';


@Component({
  selector: 'app-create-update-iso8583-field-form',
  templateUrl: './create-update-iso8583-field-form.component.html',
  styleUrls: ['./create-update-iso8583-field-form.component.css'],
})
export class CreateUpdateIso8583FieldFormComponent
  implements OnInit, AfterViewInit
{
  @Select(ISO8583FieldState.dialects) dialects$!: Observable<
    DialectMsgTemplateGroup[]
  >;

  form!: FormGroup;
  disableStatus: boolean = false;
  showClearButton: boolean = false;
  DialectMsgTemplateOptionList: DialectMsgTemplateGroup[] = [];
  IsoFieldConfigurationModel: IsoFieldConfigurationModel =
    new IsoFieldConfigurationModel();
  showLoading: boolean = false;

  constructor(
    public isoFieldConfigurationService: IsoFieldConfigurationService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.isoFieldConfigurationService.onGetAllDialect();
    this.dialects$.subscribe(data => {
      this.DialectMsgTemplateOptionList = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  ngAfterViewInit(): void {
    if (this.isoFieldConfigurationService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.disableStatus = !this.form.dirty;
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  createForm() {
    this.form = this.fb.group({
      isoFieldId: ['', Validators.required],
      tagNumber: ['', Validators.required],
      dialectId: ['', Validators.required],
      attributeId: ['', Validators.required],
      isTagNumber: ['', Validators.required],
    });
  }

  setNewDataToModel(): IsoFieldConfigurationModel {
    this.IsoFieldConfigurationModel.isoFieldId = this.isoFieldId.value;
    this.IsoFieldConfigurationModel.dialectMessageTemplate =
      new Iso8583DialectMsgTemplate(Number(this.dialectId.value.code));
    this.IsoFieldConfigurationModel.attributeId = this.attributeId.value;
    this.IsoFieldConfigurationModel.isTagNumber = this.isTagNumber.value;
    this.IsoFieldConfigurationModel.tagNumber = this.tagNumber.value;
    return this.IsoFieldConfigurationModel;
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingAttributeId != value.attributeId ||
        this.existingDialectId != value.dialectId ||
        this.existingIsTagNumber != value.isTagNumber ||
        this.existingIsoFieldId != value.isoFieldId ||
        this.existingTagNumber != value.tagNumber || 
        this.existingDialectMsgTemplate != value.messageTemplate.name
      ) {
        this.disableStatus = false;
      }
      if (
        this.existingAttributeId == value.attributeId &&
        this.existingDialectId == value.dialectId &&
        this.existingIsTagNumber == value.isTagNumber &&
        this.existingIsoFieldId == value.isoFieldId &&
        this.existingTagNumber == value.tagNumb &&
        this.existingDialectMsgTemplate == value.messageTemplate.name
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.attributeId.setValue(this.existingAttributeId);
    this.dialectId.setValue({
      name: this.existingDialectMsgTemplate.nameType,
      code: String(this.existingDialectMsgTemplate.templateId)
    }
    );
    this.isTagNumber.setValue(this.existingIsTagNumber);
    this.isoFieldId.setValue(this.existingIsoFieldId);
    this.tagNumber.setValue(this.existingTagNumber);
  }

  onUpdateIsoField() {
    this.showLoading = true;
    const newData =
      this.isoFieldConfigurationService.createIsoFieldConfigurationFormData(
        String(this.existingIsoFieldId),
        this.setNewDataToModel()
      );

    this.isoFieldConfigurationService.onUpdateIsoFieldConfiguration(newData);
  }

  onCreateIsoField() {
    this.showLoading = true;
    this.isoFieldConfigurationService.onCreateIsoFieldConfiguration(this.setNewDataToModel())
  }

  AddIso8583FieldConfig(data: any) {
  }

  get isoFieldId() {
    return this.form.controls['attributeId'];
  }

  get tagNumber() {
    return this.form.controls['tagNumber'];
  }

  get dialectId() {
    return this.form.controls['dialectId'];
  }

  get attributeId() {
    return this.form.controls['isoFieldId'];
  }

  get isTagNumber() {
    return this.form.controls['isTagNumber'];
  }

  get existingIsoFieldId() {
    return this.isoFieldConfigurationService.existingData.isoFieldId;
  }

  get existingTagNumber() {
    return this.isoFieldConfigurationService.existingData.tagNumber;
  }

  get existingDialectId() {
    return this.isoFieldConfigurationService.existingData.dialectId;
  }

  get existingAttributeId() {
    return this.isoFieldConfigurationService.existingData.attributeId;
  }

  get existingIsTagNumber() {
    return this.isoFieldConfigurationService.existingData.isTagNumber;
  }

  get existingDialectMsgTemplate() {
    return this.isoFieldConfigurationService.existingData.dialectMessageTemplate;
  }
}
