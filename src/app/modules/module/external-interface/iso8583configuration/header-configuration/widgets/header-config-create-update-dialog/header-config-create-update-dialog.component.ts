import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EncodingInterface } from 'src/app/interface/modules/encoding';
import { FieldFormatInterface } from 'src/app/interface/modules/field-format';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { EncodingModel } from 'src/app/model/modules-model/encoding.model';
import { FieldFormatModel } from 'src/app/model/modules-model/field-format.model';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { IsoFieldConditionModel } from 'src/app/model/modules-model/iso-field-condition.model';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration.service';
import { HeaderConfigState } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/header-configuration/header-config.state';

@Component({
  selector: 'app-header-config-create-update-dialog',
  templateUrl: './header-config-create-update-dialog.component.html',
  styleUrls: ['./header-config-create-update-dialog.component.css'],
})
export class HeaderConfigCreateUpdateDialogComponent
  implements OnInit, AfterViewInit
{
  @Select(HeaderConfigState.IsoConfigurations)
  IsoConfigurations$!: Observable<IsoConfigurationInterface[]>;
  @Select(HeaderConfigState.Encodings)
  Encodings$!: Observable<EncodingInterface[]>;
  @Select(HeaderConfigState.FieldFormats)
  fieldFormats$!: Observable<FieldFormatInterface[]>;

  formGroup!: FormGroup;
  isoConfigurationInterface: IsoConfigurationInterface[] = [];
  encodingInterface: EncodingInterface[] = [];
  fieldFormatInterface: FieldFormatInterface[] = [];
  headerConfigModel: HeaderConfigurationModel = new HeaderConfigurationModel();
  showClear: boolean = false;
  disableStatus: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    public headerService: HeaderConfigurationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.headerService.onGetAllHeaderIsoConfig();
    this.headerService.onGetAllHeaderEncoding();
    this.headerService.onGetAllFieldFormat();
    this.headerService;
    this.Encodings$.subscribe((data) => {
      this.encodingInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
    this.IsoConfigurations$.subscribe((data) => {
      this.isoConfigurationInterface = data.sort((a, b) =>
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
    if (this.headerService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  createForm() {
    this.formGroup = this.fb.group({
      headerField: ['', Validators.required],
      description: ['', Validators.required],
      headerLength: ['', Validators.required],
      fieldFormat: ['', Validators.required],
      encoding: ['', Validators.required],
      isoConfiguration: ['', Validators.required],
      isofieldCondition: [null],
      priority: [1],
    });
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (
        this.existingHeaderField != value.headerField ||
        this.existingHeaderLength != value.headerLength ||
        this.existingDescription != value.description ||
        this.existingIsoConfiguration != value.isoConfiguration ||
        this.existingFieldFormat != value.fieldFormat ||
        this.existingEncoding != value.encoding
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingHeaderField == value.headerField &&
        this.existingHeaderLength == value.headerLength &&
        this.existingDescription == value.description &&
        this.existingIsoConfiguration == value.isoConfiguration &&
        this.existingFieldFormat == value.fieldFormat &&
        this.existingEncoding == value.encoding
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.headerField.setValue(this.existingHeaderField);
    this.headerLength.setValue(this.existingHeaderLength);
    this.description.setValue(this.existingDescription);
    this.isoConfiguration.setValue({
      name: this.existingIsoConfiguration.name,
      code: String(this.existingIsoConfiguration.id),
    });
    this.fieldFormat.setValue({
      name: this.existingFieldFormat.formatType,
      code: String(this.existingFieldFormat.id),
    });
    this.encoding.setValue({
      name: this.existingEncoding.encodingType,
      code: String(this.existingEncoding.id),
    });
    this.isofieldCondition.setValue(this.existingIsofieldCondition);
    this.priority.setValue(this.existingPriority);
  }

  setNewDataToModel(): HeaderConfigurationModel {
    this.headerConfigModel.headerField = this.headerField.value;
    this.headerConfigModel.headerLength = this.headerLength.value;
    this.headerConfigModel.description = this.description.value;
    this.headerConfigModel.isoConfiguration = new IsoConfigurationModel(
      Number(this.isoConfiguration.value.code)
    );
    this.headerConfigModel.fieldFormat = new FieldFormatModel(
      Number(this.fieldFormat.value.code)
    );
    this.headerConfigModel.encoding = new EncodingModel(
      Number(this.encoding.value.code)
    );
    this.headerConfigModel.isofieldCondition = this.isofieldCondition.value;
    this.headerConfigModel.priority = this.priority.value;

    return this.headerConfigModel;
  }

  setUpdateDataToModel(): HeaderConfigurationModel {
    this.headerConfigModel.id = this.existingId;
    this.headerConfigModel.headerField = this.headerField.value;
    this.headerConfigModel.headerLength = this.headerLength.value;
    this.headerConfigModel.description = this.description.value;
    this.headerConfigModel.isoConfiguration = new IsoConfigurationModel(
      Number(this.isoConfiguration.value.code)
    );
    this.headerConfigModel.fieldFormat = new FieldFormatModel(
      Number(this.fieldFormat.value.code)
    );
    this.headerConfigModel.encoding = new EncodingModel(
      Number(this.encoding.value.code)
    );
    if (this.isofieldCondition == null) {
      this.headerConfigModel.isofieldCondition = new IsoFieldConditionModel(
        Number(this.existingIsofieldCondition.id)
      );
    } else {
      this.headerConfigModel.isofieldCondition = this.existingIsofieldCondition;
    }
    this.headerConfigModel.priority = this.priority.value;

    return this.headerConfigModel;
  }

  onCreateHeaderConfig() {
    this.showLoading = true;
    this.headerService.onCreateHeaderConfig(this.setNewDataToModel());
  }

  onUpdateHeaderConfig() {
    this.showLoading = true;
    this.headerService.onUpdateHeaderConfig(this.setUpdateDataToModel());
  }

  get headerField() {
    return this.formGroup.controls['headerField'];
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get headerLength() {
    return this.formGroup.controls['headerLength'];
  }

  get fieldFormat() {
    return this.formGroup.controls['fieldFormat'];
  }

  get encoding() {
    return this.formGroup.controls['encoding'];
  }

  get isoConfiguration() {
    return this.formGroup.controls['isoConfiguration'];
  }

  get isofieldCondition() {
    return this.formGroup.controls['isofieldCondition'];
  }

  get priority() {
    return this.formGroup.controls['priority'];
  }

  get existingId() {
    return this.headerService.existingData.id;
  }

  get existingHeaderField() {
    return this.headerService.existingData.headerField;
  }

  get existingDescription() {
    return this.headerService.existingData.description;
  }

  get existingHeaderLength() {
    return this.headerService.existingData.headerLength;
  }

  get existingFieldFormat() {
    return this.headerService.existingData.fieldFormat;
  }

  get existingEncoding() {
    return this.headerService.existingData.encoding;
  }

  get existingIsoConfiguration() {
    return this.headerService.existingData.isoConfiguration;
  }

  get existingIsofieldCondition() {
    return this.headerService.existingData.isofieldCondition;
  }

  get existingPriority() {
    return this.headerService.existingData.priority;
  }
}
