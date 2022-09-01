import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';
import { DialectMsgTemplateGroup } from 'src/app/interface/modules/dialect-msg-template-group';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { Select } from '@ngxs/store';
import { ChannelTypeState } from 'src/app/state-configuration/modules/channel-configuration/channel-type/channel-type.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-update-dialog-type',
  templateUrl: './create-update-dialog-type.component.html',
  styleUrls: ['./create-update-dialog-type.component.css'],
})
export class CreateUpdateDialogTypeComponent implements OnInit, AfterViewInit {
  @Select(ChannelTypeState.dialects) dialects$!: Observable<
    DialectMsgTemplateGroup[]
  >;

  formGroup!: FormGroup;
  showClear: boolean = false;
  disableStatus: boolean = false;
  dialectmsgTemplateOptionList: DialectMsgTemplateGroup[] = [];
  terminalTypeModel: ChannelTypeModel = new ChannelTypeModel();
  public showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    public channelTypeService: ChannelTypeService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.channelTypeService.onGetAllDialectMsgTemplate();
    this.dialects$.subscribe(data => {
      this.DialectMsgTemplateOptionList = data.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  ngAfterViewInit(): void {
    if (this.channelTypeService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.onCheckingFormHasChange()
      this.changeDetectorRef.detectChanges();
    }
  }

  createForm() {
    this.formGroup = this.fb.group({
      description: ['', Validators.required],
      channelType: ['', Validators.required],
      messageTemplate: ['', Validators.required],
    });
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.formGroup.dirty;
    this.formGroup.valueChanges.subscribe((value) => {
      if (
        this.existingDescription != value.description ||
        this.existingChannelType != value.channelType ||
        this.existingDialectMsgTemplate != value.messageTemplate.name
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingDescription == value.description &&
        this.existingChannelType == value.channelType &&
        this.existingDialectMsgTemplate == value.messageTemplate.name
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.channelType.setValue(this.existingChannelType);
    this.description.setValue(this.existingDescription);
    this.dialectMsgTemplate.setValue({
      name: this.existingDialectMsgTemplate.nameType,
      code: String(this.existingDialectMsgTemplate.templateId),
    });
  }

  setNewDataToModel(): ChannelTypeModel {
    this.terminalTypeModel.channelType = this.channelType.value;
    this.terminalTypeModel.dialectMessageTemplate =
      new Iso8583DialectMsgTemplate(Number(this.dialectMsgTemplate.value.code));
    this.terminalTypeModel.description = this.description.value;
    return this.terminalTypeModel;
  }

  onCreateTerminalType() {
    this.showLoading = true;
    this.channelTypeService.onAddChannelType(this.setNewDataToModel());
  }

  onUpdateTerminalType() {
    this.showLoading = true;
    const newData = this.channelTypeService.createChannelTypeFormData(
      this.existingChannelType,
      this.setNewDataToModel()
    );

    this.channelTypeService.onUpdateChannelType(
      newData,
      this.setNewDataToModel()
    );
  }

  set DialectMsgTemplateOptionList(optionList: DialectMsgTemplateGroup[]) {
    this.dialectmsgTemplateOptionList = optionList;
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get channelType() {
    return this.formGroup.controls['channelType'];
  }

  get dialectMsgTemplate() {
    return this.formGroup.controls['messageTemplate'];
  }

  get existingDescription() {
    return this.channelTypeService.existingData.description;
  }

  get existingChannelType() {
    return this.channelTypeService.existingData.channelType;
  }

  get existingDialectMsgTemplate() {
    return this.channelTypeService.existingData.dialectMessageTemplate;
  }
}
