import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-configuration.service';

@Component({
  selector: 'app-iso-config-create-update-dialog',
  templateUrl: './iso-config-create-update-dialog.component.html',
  styleUrls: ['./iso-config-create-update-dialog.component.css'],
})
export class IsoConfigCreateUpdateDialogComponent
  implements OnInit, AfterViewInit
{
  formGroup!: FormGroup;

  isoConfigModel: IsoConfigurationModel = new IsoConfigurationModel();
  disableStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    public isoConfigService: IsoConfigurationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    if (this.isoConfigService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  createFormat() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      hasHeader: [''],
    });
  }

  ngOnInit(): void {
    this.createFormat();
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (
        this.existingName != value.name ||
        this.existingDescription != value.description ||
        this.existingHasHeader != value.hasHeader
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingName == value.name &&
        this.existingDescription == value.description &&
        this.existingHasHeader == value.hasHeader
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToModel() {
    this.name.setValue(this.existingName);
    this.description.setValue(this.existingDescription);
    this.hasHeader.setValue(this.existingHasHeader);
  }

  setNewDataToModel(): IsoConfigurationModel {
    this.isoConfigModel.name = this.name.value;
    this.isoConfigModel.description = this.description.value;
    this.isoConfigModel.hasHeader = this.hasHeader.value;
    return this.isoConfigModel;
  }

  setUpdateDataToModel(): IsoConfigurationModel {
    this.isoConfigModel.id = this.existingId;
    this.isoConfigModel.name = this.name.value;
    this.isoConfigModel.description = this.description.value;
    this.isoConfigModel.hasHeader = this.hasHeader.value;
    return this.isoConfigModel;
  }

  onCreateIsoConfiguration() {
    this.isoConfigService.showLoading = true;
    this.isoConfigService.onAddAllIsoConfig(this.setNewDataToModel());
  }

  onUpdateIsoConfiguration() {
    this.isoConfigService.showLoading = true;
    this.isoConfigService.onUpdateIsoConfig(this.setUpdateDataToModel());
  }

  get showLoading() {
    return this.isoConfigService.showLoading;
  }

  get name() {
    return this.formGroup.controls['name'];
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get hasHeader() {
    return this.formGroup.controls['hasHeader'];
  }

  get existingName() {
    return this.isoConfigService.existingData.name;
  }

  get existingDescription() {
    return this.isoConfigService.existingData.description;
  }

  get existingHasHeader() {
    return this.isoConfigService.existingData.hasHeader;
  }

  get existingId() {
    return this.isoConfigService.existingData.id;
  }
}
