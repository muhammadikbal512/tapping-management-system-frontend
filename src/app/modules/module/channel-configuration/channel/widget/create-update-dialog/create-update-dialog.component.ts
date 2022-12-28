import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ChannelService } from 'src/app/modules/services/module-services/channel-configuration/channel.service';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChannelTypeGroupInterface } from 'src/app/interface/modules/channel-type-group';
import { ChannelModel } from 'src/app/model/modules-model/channel.model';
import { ChannelState } from 'src/app/state-configuration/modules/channel-configuration/channel/channel.state';

@Component({
  selector: 'app-create-update-dialog',
  templateUrl: './create-update-dialog.component.html',
  styleUrls: ['./create-update-dialog.component.css'],
})
export class CreateUpdateDialogChannelComponent
  implements OnInit, AfterViewInit
{
  @Select(ChannelState.channelType)
  channelTypes$!: Observable<ChannelTypeGroupInterface[]>;

  form!: FormGroup;
  showClear: boolean = false;
  disableStatus: boolean = false;
  channelModel: ChannelModel = new ChannelModel();
  channelTypeGroupInterfaces: ChannelTypeGroupInterface[] = [];
  showLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    public channelService: ChannelService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.channelService.onGetAllTerminalType();
    this.channelTypes$.subscribe((data) => {
      this.channelTypeGroupInterfaces = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    });
  }

  ngAfterViewInit(): void {
    if (this.channelService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  createForm() {
    this.form = this.fb.group({
      channelId: ['', Validators.required],
      ipAddress: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
          ),
        ],
      ],
      port: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      channelType: ['', Validators.required],
      isOnPremise: [''],
      channelstatus: [''],
    });
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.form.dirty;
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingChannelId != value.channelId ||
        this.existingIpAddress != value.ipAddress ||
        this.existingPort != value.port ||
        this.existingChannelType != value.channelType ||
        this.existingisOnPremise != value.isOnPremise ||
        this.existingchannelstatus != value.channelstatus
      ) {
        this.disableStatus = false;
      }

      if (
        this.existingChannelId == value.channelId &&
        this.existingIpAddress == value.ipAddress &&
        this.existingPort == value.port &&
        this.existingChannelType == value.channelType.name &&
        this.existingisOnPremise == value.isOnPremise &&
        this.existingchannelstatus == value.channelstatus
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.channelId.setValue(this.existingChannelId);
    this.ipAddress.setValue(this.existingIpAddress);
    this.port.setValue(this.existingPort);
    this.isOnPremise.setValue(this.existingisOnPremise);
    this.channelType.setValue({
      name: this.existingChannelType.channelType,
      code: String(this.existingChannelType.channelTypeId),
    });
  }

  setNewDataToModel(): ChannelModel {
    this.channelModel.channelId = this.channelId.value;
    this.channelModel.ipAddress = this.ipAddress.value;
    this.channelModel.port = this.port.value;
    this.channelModel.channelType = new ChannelTypeModel(
      Number(this.channelType.value.code)
    );
    this.channelModel.isOnPremise = this.isOnPremise.value;
    if (this.isOnPremise.value == '' || this.isOnPremise.value == null) {
      this.channelModel.isOnPremise = false;
    }

    return this.channelModel;
  }

  onCreateChannel() {
    this.showLoading = true;
    this.channelService.onCreateChannel(this.setNewDataToModel());
  }

  onUpdateChannel() {
    this.showLoading = true;
    const newData = this.channelService.createChannelFormData(
      String(this.existingChannelId),
      this.setNewDataToModel()
    );
    this.channelService.onUpdateChannel(newData, this.setNewDataToModel());
  }

  set ChannelTypeGroupInterfaces(optionList: ChannelTypeGroupInterface[]) {
    this.channelTypeGroupInterfaces = optionList;
  }

  get channelId() {
    return this.form.controls['channelId'];
  }

  get channelType() {
    return this.form.controls['channelType'];
  }

  get ipAddress() {
    return this.form.controls['ipAddress'];
  }

  get port() {
    return this.form.controls['port'];
  }

  get isOnPremise() {
    return this.form.controls['isOnPremise'];
  }

  get existingChannelId() {
    return this.channelService.existingData.channelId;
  }

  get existingIpAddress() {
    return this.channelService.existingData.ipAddress;
  }

  get existingPort() {
    return this.channelService.existingData.port;
  }

  get existingChannelType() {
    return this.channelService.existingData.channelType;
  }

  get existingisOnPremise() {
    return this.channelService.existingData.isOnPremise;
  }

  get existingchannelstatus() {
    return this.channelService.existingData.channelstatus;
  }
}
