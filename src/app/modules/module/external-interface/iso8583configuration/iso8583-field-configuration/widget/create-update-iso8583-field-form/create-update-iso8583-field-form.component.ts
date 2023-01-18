import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration.service';
import {
  Iso8583FieldModel,
  Iso8583SubFieldModel,
} from 'src/app/model/modules-model/iso8583-field.model';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { EncodingInterface } from 'src/app/interface/modules/encoding';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { Select } from '@ngxs/store';
import { ISO8583FieldState } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-field-configuration/iso8583-field.state';
import { Observable } from 'rxjs';
import { FieldFormatInterface } from 'src/app/interface/modules/field-format';
import { IsoFieldConditionModel } from 'src/app/model/modules-model/iso-field-condition.model';
import { FieldFormatModel } from 'src/app/model/modules-model/field-format.model';
import { EncodingModel } from 'src/app/model/modules-model/encoding.model';

@Component({
  selector: 'app-create-update-iso8583-field-form',
  templateUrl: './create-update-iso8583-field-form.component.html',
  styleUrls: ['./create-update-iso8583-field-form.component.css'],
})
export class CreateUpdateIso8583FieldFormComponent
  implements OnInit, AfterViewInit
{
  @Select(ISO8583FieldState.IsoConfiguration)
  isoConfigurations$!: Observable<IsoConfigurationInterface[]>;
  @Select(ISO8583FieldState.Encoding)
  encodings$!: Observable<EncodingInterface[]>;
  @Select(ISO8583FieldState.fieldFormat)
  fieldFormats$!: Observable<FieldFormatInterface[]>;

  form!: FormGroup;
  disableStatus: boolean = false;
  showClearButton: boolean = false;
  isChecked: boolean = false;
  encodingInterface: EncodingInterface[] = [];
  isoConfigurationInterface: IsoConfigurationInterface[] = [];
  fieldFormatInterface: FieldFormatInterface[] = [];
  IsoFieldConfigurationModel: Iso8583FieldModel = new Iso8583FieldModel();
  showLoading: boolean = false;

  constructor(
    public isoFieldConfigurationService: IsoFieldConfigurationService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.isoFieldConfigurationService.onGetAllIsoConfig();
    this.isoFieldConfigurationService.onGetAllEncoding();
    this.isoFieldConfigurationService.onGetAllFieldFormat();
    this.isoConfigurations$.subscribe((data) => {
      this.isoConfigurationInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
    this.encodings$.subscribe((data) => {
      this.encodingInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
    this.fieldFormats$.subscribe((data) => {
      this.fieldFormatInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
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
      fieldId: ['', Validators.required],
      fieldFormat: ['', Validators.required],
      encoding: ['', Validators.required],
      isoConfiguration: ['', Validators.required],
      description: ['', Validators.required],
      fieldLength: ['', Validators.required],
      hasChild: [''],
      isofieldCondition: [null],
      subFieldConfigurations: [[]],
    });
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingFieldId != value.fieldId ||
        this.existingFieldFormat != value.fieldFormat ||
        this.existingEncoding != value.encoding ||
        this.existingIsoConfiguration != value.isoconfiguration.name ||
        this.existingDescription != value.description ||
        this.existingFieldLength != value.fieldlength ||
        this.existingHasChild != value.hasChild ||
        this.existingSubFieldConfiguration != value.subFieldConfigurations
      ) {
        this.disableStatus = false;
      }
      if (
        this.existingFieldId == value.fieldId &&
        this.existingFieldFormat == value.fieldFormat &&
        this.existingEncoding == value.encoding &&
        this.existingIsoConfiguration == value.isoconfiguration.name &&
        this.existingDescription == value.description &&
        this.existingFieldLength == value.fieldlength &&
        this.existingHasChild == value.hasChild &&
        this.existingSubFieldConfiguration == value.subFieldConfigurations
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.fieldId.setValue(this.existingFieldId);
    this.fieldFormat.setValue({
      name: this.existingFieldFormat.formatType,
      code: String(this.existingFieldFormat.id),
    });
    this.encoding.setValue({
      name: this.existingEncoding.encodingType,
      code: String(this.existingEncoding.id),
    });
    this.isoConfiguration.setValue({
      name: this.existingIsoConfiguration.name,
      code: String(this.existingIsoConfiguration.id),
    });
    this.description.setValue(this.existingDescription);
    this.fieldLength.setValue(this.existingFieldLength);
    this.hasChild.setValue(this.existingHasChild);
    this.isofieldCondition.setValue(this.existingFieldCondId);
  }

  setNewDataToModel(): Iso8583FieldModel {
    this.IsoFieldConfigurationModel.fieldId = this.fieldId.value;
    this.IsoFieldConfigurationModel.fieldFormat = new FieldFormatModel(
      Number(this.fieldFormat.value.code)
    );
    this.IsoFieldConfigurationModel.encoding = new EncodingModel(
      Number(this.encoding.value.code)
    );
    this.IsoFieldConfigurationModel.isoConfiguration =
      new IsoConfigurationModel(Number(this.isoConfiguration.value.code));
    this.IsoFieldConfigurationModel.description = this.description.value;
    this.IsoFieldConfigurationModel.fieldLength = this.fieldLength.value;
    this.IsoFieldConfigurationModel.hasChild = this.hasChild.value;
    this.IsoFieldConfigurationModel.isoFieldCondition =
      this.isofieldCondition.value;
    if (this.isoFieldConfigurationService == null) {
      this.IsoFieldConfigurationModel.subFieldConfigurations = [];
    } else {
      this.IsoFieldConfigurationModel.subFieldConfigurations =
        this.existingSubFieldConfiguration;
    }
    return this.IsoFieldConfigurationModel;
  }

  setUpdateToModel(): Iso8583FieldModel {
    this.IsoFieldConfigurationModel.id = this.existingId;
    this.IsoFieldConfigurationModel.fieldId = this.fieldId.value;
    this.IsoFieldConfigurationModel.fieldFormat = new FieldFormatModel(
      Number(this.fieldFormat.value.code)
    );
    this.IsoFieldConfigurationModel.encoding = new EncodingModel(
      Number(this.encoding.value.code)
    );
    this.IsoFieldConfigurationModel.isoConfiguration =
      new IsoConfigurationModel(Number(this.isoConfiguration.value.code));
    this.IsoFieldConfigurationModel.description = this.description.value;
    this.IsoFieldConfigurationModel.fieldLength = this.fieldLength.value;
    this.IsoFieldConfigurationModel.hasChild = this.hasChild.value;
    if (this.isofieldCondition == null) {
      new IsoFieldConditionModel(Number(this.existingFieldCondId.id));
    } else {
      this.IsoFieldConfigurationModel.isoFieldCondition =
        this.existingFieldCondId;
    }
    this.IsoFieldConfigurationModel.subFieldConfigurations =
      this.existingSubFieldConfiguration;
    return this.IsoFieldConfigurationModel;
  }

  onUpdateIsoField() {
    this.showLoading = true;
    this.isoFieldConfigurationService.onUpdateIsoFieldConfiguration(
      this.setUpdateToModel()
    );
  }

  onCreateIsoField() {
    this.showLoading = true;
    this.isoFieldConfigurationService.onCreateIsoFieldConfiguration(
      this.setNewDataToModel()
    );
  }

  get fieldId() {
    return this.form.controls['fieldId'];
  }

  get fieldFormat() {
    return this.form.controls['fieldFormat'];
  }

  get encoding() {
    return this.form.controls['encoding'];
  }

  get isoConfiguration() {
    return this.form.controls['isoConfiguration'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get fieldLength() {
    return this.form.controls['fieldLength'];
  }

  get hasChild() {
    return this.form.controls['hasChild'];
  }

  get isofieldCondition() {
    return this.form.controls['isofieldCondition'];
  }

  get subFieldConfigurations() {
    return this.isoFieldConfigurationService.existingData
      .subFieldConfigurations;
  }

  get existingId() {
    return this.isoFieldConfigurationService.existingData.id;
  }

  get existingFieldId() {
    return this.isoFieldConfigurationService.existingData.id;
  }

  get existingFieldFormat() {
    return this.isoFieldConfigurationService.existingData.fieldFormat;
  }

  get existingEncoding() {
    return this.isoFieldConfigurationService.existingData.encoding;
  }

  get existingIsoConfiguration() {
    return this.isoFieldConfigurationService.existingData.isoConfiguration;
  }

  get existingDescription() {
    return this.isoFieldConfigurationService.existingData.description;
  }

  get existingFieldLength() {
    return this.isoFieldConfigurationService.existingData.fieldLength;
  }

  get existingHasChild() {
    return this.isoFieldConfigurationService.existingData.hasChild;
  }

  get existingFieldCondId() {
    return this.isoFieldConfigurationService.existingData.isoFieldCondition;
  }

  get existingSubFieldConfiguration() {
    return this.isoFieldConfigurationService.existingData
      .subFieldConfigurations;
  }
}
