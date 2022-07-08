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

@Component({
  selector: 'app-create-update-iso8583-field-form',
  templateUrl: './create-update-iso8583-field-form.component.html',
  styleUrls: ['./create-update-iso8583-field-form.component.css'],
})
export class CreateUpdateIso8583FieldFormComponent
  implements OnInit, AfterViewInit
{
  // @Select(ISO8583FieldState.dialects) dialects$!: Observable<
  //   DialectMsgTemplateGroup[]
  // >;

  form!: FormGroup;
  disableButton: boolean = false;
  showClearButton: boolean = false;
  DialectMsgTemplateOptionList: DialectMsgTemplateGroup[] = [];
  IsoFieldConfigurationModel: IsoFieldConfigurationModel =
    new IsoFieldConfigurationModel();

  constructor(
    public isoFieldConfigurationService: IsoFieldConfigurationService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.isoFieldConfigurationService.onGetAllDialect();
    // this.dialects$.subscribe(data => {
    //   this.DialectMsgTemplateOptionList = data.sort((a, b) => a.name.localeCompare(b.name));
    // });
  }

  ngAfterViewInit(): void {
    if (this.isoFieldConfigurationService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.disableButton = !this.form.dirty;
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
    this.IsoFieldConfigurationModel.attributeId = this.attributeId.value;
    this.IsoFieldConfigurationModel.dialectId = this.dialectId.value;
    this.IsoFieldConfigurationModel.isTagNumber = this.isTagNumber.value;
    this.IsoFieldConfigurationModel.isoFieldId = this.isoFieldId.value;
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
        this.existingTagNumber != value.tagNumber
      ) {
        this.disableButton = false;
      }
      if (
        this.existingAttributeId == value.attributeId &&
        this.existingDialectId == value.dialectId &&
        this.existingIsTagNumber == value.isTagNumber &&
        this.existingIsoFieldId == value.isoFieldId &&
        this.existingTagNumber == value.tagNumb
      ) {
        this.disableButton = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.attributeId.setValue(this.existingAttributeId);
    this.dialectId.setValue(this.existingDialectId);
    this.isTagNumber.setValue(this.existingIsTagNumber);
    this.isoFieldId.setValue(this.existingIsoFieldId);
    this.tagNumber.setValue(this.existingTagNumber);
  }

  onUpdateIsoField() {
    const newData =
      this.isoFieldConfigurationService.createIsoFieldConfigurationFormData(
        String(this.existingIsoFieldId),
        this.setNewDataToModel()
      );

    this.isoFieldConfigurationService.onUpdateIsoFieldConfiguration(newData);
  }

  onCreateIsoField() {}

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
}
