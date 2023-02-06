import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/mti-configuration.service';

@Component({
  selector: 'app-mti-config-create-update-dialog',
  templateUrl: './mti-config-create-update-dialog.component.html',
  styleUrls: ['./mti-config-create-update-dialog.component.css'],
})
export class MtiConfigCreateUpdateDialogComponent
  implements OnInit, AfterViewInit
{
  formGroup!: FormGroup;
  showLoading: boolean = false;
  mtiConfigModel: MtiConfigurationModel = new MtiConfigurationModel();
  disableStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    public mtiConfigService: MtiConfigurationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    if (this.mtiConfigService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (
        this.existingValue != value.value ||
        this.existingResponse != value.isResponse ||
        this.existingReversal != value.isReversal
      ) {
        this.disableStatus = false;
      }
      if (
        this.existingValue == value.value &&
        this.existingResponse == value.isResponse &&
        this.existingReversal == value.isReversal
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToModel() {
    this.value.setValue(this.existingValue);
    this.response.setValue(this.existingResponse);
    this.reversal.setValue(this.existingReversal);
  }

  setNewDataToModel(): MtiConfigurationModel {
    this.mtiConfigModel.value = this.value.value;
    this.mtiConfigModel.response = this.response.value;
    this.mtiConfigModel.reversal = this.reversal.value;
    return this.mtiConfigModel;
  }

  setUpdateDataToModel(): MtiConfigurationModel {
    this.mtiConfigModel.id = this.existingId;
    this.mtiConfigModel.value = this.value.value;
    this.mtiConfigModel.response = this.response.value;
    this.mtiConfigModel.reversal = this.reversal.value;
    return this.mtiConfigModel;
  }

  createFormat() {
    this.formGroup = this.fb.group({
      value: ['', Validators.required],
      response: ['', Validators.required],
      reversal: ['', Validators.required],
    });
  }

  onCreateMtiConfiguration() {
    this.showLoading = true;
    this.mtiConfigService.onAddMtiConfig(this.setNewDataToModel());
  }

  onUpdateMtiConfiguration() {
    this.showLoading = true;
    this.mtiConfigService.onUpdateMtiConfig(this.setUpdateDataToModel());
  }

  get value() {
    return this.formGroup.controls['value'];
  }

  get response() {
    return this.formGroup.controls['response'];
  }

  get reversal() {
    return this.formGroup.controls['reversal'];
  }

  get existingId() {
    return this.mtiConfigService.existingData.id;
  }

  get existingValue() {
    return this.mtiConfigService.existingData.value;
  }

  get existingResponse() {
    return this.mtiConfigService.existingData.response;
  }

  get existingReversal() {
    return this.mtiConfigService.existingData.reversal;
  }
}
