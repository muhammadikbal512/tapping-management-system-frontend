import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping-create-dialog',
  templateUrl: './iso8583-response-mapping-create-dialog.component.html',
  styleUrls: ['./iso8583-response-mapping-create-dialog.component.css'],
})
export class Iso8583ResponseMappingCreateDialogComponent
  implements OnInit, AfterViewInit
{
  formGroup!: FormGroup;
  showLoading: boolean = false;
  disableStatus: boolean = false;
  responseMappingModel: ResponseMappingModel = new ResponseMappingModel();
  showClear: boolean = false;
  configIds!: any;
  constructor(
    private fb: FormBuilder,
    public responseService: ResponseMappingService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.responseService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  createFormat() {
    this.formGroup = this.fb.group({
      respCode: ['', Validators.required],
      description: ['', Validators.required],
      isoConfiguration: ['', Validators.required],
    });
  }

  setNewDataToModel(): ResponseMappingModel {
    this.responseMappingModel.respCode = this.respCode.value;
    this.responseMappingModel.description = this.description.value;
    this.responseMappingModel.isoConfiguration = this.isoConfiguration.value;

    return this.responseMappingModel;
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (
        this.existingRespCode != value.respCode ||
        this.existingDescription != value.description ||
        this.existingIsoConfiguration != value.isoConfiguration
      ) {
        this.disableStatus = false;
      }
      if (
        this.existingRespCode == value.respCode &&
        this.existingDescription == value.description &&
        this.existingIsoConfiguration == value.isoConfiguration
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToModel() {
    this.respCode.setValue(this.existingRespCode);
    this.description.setValue(this.existingDescription);
    this.isoConfiguration.setValue(this.existingIsoConfiguration);
  }

  onCreateResponseCodeMapping() {}

  onUpdateResponseCodeMapping() {}

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  get respCode() {
    return this.formGroup.controls['respCode'];
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get isoConfiguration() {
    return this.formGroup.controls['isoConfiguration'];
  }

  get existingRespCode() {
    return this.responseMappingModel.respCode;
  }

  get existingDescription() {
    return this.responseMappingModel.description;
  }

  get existingIsoConfiguration() {
    return this.responseMappingModel.isoConfiguration;
  }
}
