import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration.service';

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

  setNewDataToModel(): MtiConfigurationModel {
    this.mtiConfigModel.value = this.value.value;
    this.mtiConfigModel.isResponse = this.isResponse.value;
    this.mtiConfigModel.isReversal = this.isReversal.value;
    return this.mtiConfigModel;
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (
        this.existingValue != value.value ||
        this.existingIsResponse != value.isResponse ||
        this.existingIsReversal != value.isReversal
      ) {
        this.disableStatus = false;
      }
      if (
        this.existingValue == value.value &&
        this.existingIsResponse == value.isResponse &&
        this.existingIsReversal == value.isReversal
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToModel() {
    this.value.setValue(this.existingValue);
    this.isResponse.setValue(this.existingIsResponse);
    this.isReversal.setValue(this.existingIsReversal);
  }

  createFormat() {
    this.formGroup = this.fb.group({
      value: ['', Validators.required],
      isResponse: ['', Validators.required],
      isReversal: ['', Validators.required],
    });
  }

  onCreateMtiConfiguration() {
    this.showLoading = true;
    this.mtiConfigService.onAddMtiConfig(this.setNewDataToModel());
  }

  onUpdateMtiConfiguration() {
    this.showLoading = true;
    const newData = this.mtiConfigService.MtiConfigCreateFormat(
      this.existingId,
      this.setNewDataToModel()
    );

    this.mtiConfigService.onUpdateMtiConfig(newData, this.setNewDataToModel());
  }

  get value() {
    return this.formGroup.controls['value'];
  }

  get isResponse() {
    return this.formGroup.controls['isResponse'];
  }

  get isReversal() {
    return this.formGroup.controls['isReversal'];
  }

  get existingId() {
    return this.mtiConfigService.existingData.id;
  }

  get existingValue() {
    return this.mtiConfigService.existingData.value;
  }

  get existingIsResponse() {
    return this.mtiConfigService.existingData.isResponse;
  }

  get existingIsReversal() {
    return this.mtiConfigService.existingData.isReversal;
  }
}
