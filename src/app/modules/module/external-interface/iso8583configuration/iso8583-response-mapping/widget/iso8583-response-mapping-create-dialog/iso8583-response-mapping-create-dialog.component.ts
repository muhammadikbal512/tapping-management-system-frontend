import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import { ResponseMappingService } from 'src/app/modules/services/module-services/external-interfaces/response-mapping.service';
import {
  ResponseMappingState,
  ResponseMappingStateModel,
} from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-response-mapping/response-mapping.state';

@Component({
  selector: 'app-iso8583-response-mapping-create-dialog',
  templateUrl: './iso8583-response-mapping-create-dialog.component.html',
  styleUrls: ['./iso8583-response-mapping-create-dialog.component.css'],
})
export class Iso8583ResponseMappingCreateDialogComponent
  implements OnInit, AfterViewInit
{
  @Select(ResponseMappingState.IsoConfigurations)
  IsoConfigurations$!: Observable<IsoConfigurationInterface[]>;

  formGroup!: FormGroup;

  disableStatus: boolean = false;
  isoConfigurationInterface: IsoConfigurationInterface[] = [];
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
    this.responseService.onGetAllIsoConfig();
    this.IsoConfigurations$.subscribe((data) => {
      this.isoConfigurationInterface = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
  }

  createFormat() {
    this.formGroup = this.fb.group({
      respCode: ['', Validators.required],
      description: ['', Validators.required],
      isoConfiguration: ['', Validators.required],
    });
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
    this.isoConfiguration.setValue({
      name: this.existingIsoConfiguration.name,
      code: String(this.existingIsoConfiguration.id),
    });
  }

  setNewDataToModel(): ResponseMappingModel {
    this.responseMappingModel.respCode = this.respCode.value;
    this.responseMappingModel.description = this.description.value;
    this.responseMappingModel.isoConfiguration = new IsoConfigurationModel(
      Number(this.isoConfiguration.value.code)
    );
    return this.responseMappingModel;
  }

  setUpdateDataToModel(): ResponseMappingModel {
    this.responseMappingModel.id = this.existingId;
    this.responseMappingModel.respCode = this.respCode.value;
    this.responseMappingModel.description = this.description.value;
    this.responseMappingModel.isoConfiguration = new IsoConfigurationModel(
      Number(this.isoConfiguration.value.code)
    );
    return this.responseMappingModel;
  }

  onCreateResponseCodeMapping() {
    this.responseService.showLoading = true;
    this.responseService.onCreateResponseMapping(this.setNewDataToModel());
  }

  onUpdateResponseCodeMapping() {
    this.responseService.showLoading = true;
    this.responseService.onUpdateResponseMapping(this.setUpdateDataToModel());
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  set IsoConfigurationInterface(optionList: IsoConfigurationInterface[]) {
    this.isoConfigurationInterface = optionList;
  }

  get showLoading() {
    return this.responseService.showLoading;
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

  get existingId() {
    return this.responseService.existingData.id;
  }

  get existingRespCode() {
    return this.responseService.existingData.respCode;
  }

  get existingDescription() {
    return this.responseService.existingData.description;
  }

  get existingIsoConfiguration() {
    return this.responseService.existingData.isoConfiguration;
  }
}
