import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AidConfigurationModel } from 'src/app/model/modules-model/aid-configuration.model';
import { AidConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration.service';

@Component({
  selector: 'app-aid-config-create-update-dialog',
  templateUrl: './aid-config-create-update-dialog.component.html',
  styleUrls: ['./aid-config-create-update-dialog.component.css'],
})
export class AidConfigCreateUpdateDialogComponent
  implements OnInit, AfterViewInit
{
  formGroup!: FormGroup;
  showLoading: boolean = false;
  aidConfigModel: AidConfigurationModel = new AidConfigurationModel();
  disableStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    public aidConfigService: AidConfigurationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.aidConfigService.buttonStatus == 'edit') {
      this.onCheckingFormHasChange();
      this.setExistingDataToDialog();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  createFormat() {
    this.formGroup = this.fb.group({
      aid: ['', Validators.required],
      label: ['', Validators.required],
    });
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (this.existingAid != value.aid || this.existingLabel != value.label) {
        this.disableStatus = false;
      }

      if (this.existingAid == value.aid && this.existingLabel == value.label) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.aid.setValue(this.existingAid);
    this.label.setValue(this.existingLabel);
  }

  setNewDataToModel(): AidConfigurationModel {
    this.aidConfigModel.aid = this.aid.value;
    this.aidConfigModel.label = this.label.value;
    return this.aidConfigModel;
  }

  onCreateAidNumber() {
    this.aidConfigService.onAddAidConfig(this.setNewDataToModel());
  }

  onUpdateAidNumber() {
    const newData = this.aidConfigService.createAidConfigFormData(
      String(this.existingAid),
      this.setNewDataToModel()
    );

    this.aidConfigService.onUpdateAidConfig(newData, this.setNewDataToModel());
  }

  get aid() {
    return this.formGroup.controls['aid'];
  }

  get label() {
    return this.formGroup.controls['label'];
  }

  get existingAid() {
    return this.aidConfigModel.aid;
  }

  get existingLabel() {
    return this.aidConfigModel.label;
  }
}
