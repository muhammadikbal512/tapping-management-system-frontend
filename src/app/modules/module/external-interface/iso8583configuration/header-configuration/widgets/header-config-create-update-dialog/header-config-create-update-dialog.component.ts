import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration.service';
import { HeaderService } from 'src/app/modules/services/shared-service/header.service';

@Component({
  selector: 'app-header-config-create-update-dialog',
  templateUrl: './header-config-create-update-dialog.component.html',
  styleUrls: ['./header-config-create-update-dialog.component.css'],
})
export class HeaderConfigCreateUpdateDialogComponent
  implements OnInit, AfterViewInit
{
  formGroup!: FormGroup;
  headerConfigModel: HeaderConfigurationModel = new HeaderConfigurationModel();
  showClear: boolean = false;
  dialectmsgTemplateOptionList!: any[];
  disableStatus: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    public headerService: HeaderConfigurationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
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
      isofieldCondition: ['', Validators.required],
      priority: ['', Validators.required],
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
        this.existingEncoding != value.encoding ||
        this.existingIsofieldCondition != value.isofieldCondition
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingHeaderField == value.headerField &&
        this.existingHeaderLength == value.headerLength &&
        this.existingDescription == value.description &&
        this.existingIsoConfiguration == value.isoConfiguration &&
        this.existingFieldFormat == value.fieldFormat &&
        this.existingEncoding == value.encoding &&
        this.existingIsofieldCondition == value.isofieldCondition
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.headerField.setValue(this.existingHeaderField);
    this.headerLength.setValue(this.existingHeaderLength);
    this.description.setValue(this.existingDescription);
    this.isoConfiguration.setValue(this.existingIsoConfiguration);
    this.fieldFormat.setValue(this.existingFieldFormat);
    this.encoding.setValue(this.existingEncoding);
    this.isofieldCondition.setValue({
      name: this.existingIsoConfiguration.name,
      code: String(this.existingIsoConfiguration.id),
    });
  }

  setNewDataToModel(): HeaderConfigurationModel {
    this.headerConfigModel.headerField = this.headerField.value;
    this.headerConfigModel.headerLength = this.headerLength.value;
    this.headerConfigModel.description = this.description.value;
    this.headerConfigModel.isoConfiguration = new IsoConfigurationModel(
      Number(this.isoConfiguration.value.code)
    );
    this.headerConfigModel.fieldFormat = this.fieldFormat.value;
    this.headerConfigModel.encoding = this.encoding.value;
    this.headerConfigModel.isofieldCondition = this.isofieldCondition.value;

    return this.headerConfigModel;
  }

  onCreateHeaderConfig() {
    this.headerService.onCreateHeaderConfig(this.setNewDataToModel());
  }

  onUpdateHeaderConfig() {
    const newData = this.headerService.createHeaderConfig(
      this.existingId,
      this.setNewDataToModel()
    );
    this.headerService.onUpdateHeaderConfig(newData, this.setNewDataToModel());
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
