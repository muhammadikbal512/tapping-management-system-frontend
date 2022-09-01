import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { MessageFormatGroupInterface } from 'src/app/interface/modules/message-format-group-interface';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DialectState } from 'src/app/state-configuration/modules/external-interfaces/iso8583configuration/iso8583-dialect/dialect.state';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';



@Component({
  selector: 'app-create-update-iso8583-dialect',
  templateUrl: './create-update-iso8583-dialect.component.html',
  styleUrls: ['./create-update-iso8583-dialect.component.css'],
})
export class CreateUpdateIso8583DialectComponent implements OnInit, AfterViewInit {
  @Select(DialectState.messageFormats) messageFormats$!: Observable<MessageFormatGroupInterface[]>

  form!: FormGroup;
  showClearButton: boolean = false;
  disableButton: boolean = false;
  msgFormatOptionList: MessageFormatGroupInterface[] = []
  iso8583DialectModel: Iso8583DialectMsgTemplate = new Iso8583DialectMsgTemplate();
  showLoading: boolean = false;

  constructor(
  private fb: FormBuilder,
  private changeDetectorRef: ChangeDetectorRef,
  public iso8583DialectService: Iso8583DialectService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.iso8583DialectService.onGetAllMessageFormat();
    this.messageFormats$.subscribe(data => {
      this.MsgFormatOptionList = data.sort((a, b) => a.name.localeCompare(b.name));
    })
  }

  ngAfterViewInit(): void {
    if (this.iso8583DialectService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.oncCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  createForm() {
    this.form = this.fb.group({
      nameType: ['', Validators.required],
      msgFormatId: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  oncCheckingFormHasChange() {
    this.disableButton = !this.form.dirty;
    this.form.valueChanges.subscribe(value => {
      if (
        this.existingNameType != value.nameType || this.existingMsgFormatId != value.msgFormatId.name ||
        this.existingDescription != value.description
      ) {
        this.disableButton = false;
      }

      if (
        this.existingNameType == value.nameType && this.existingMsgFormatId == value.msgFormatId.name &&
        this.existingDescription == value.description
      ) {
        this.disableButton = true;
      }
    })
  }

  setExistingDataToDialog() {
    this.nameType.setValue(this.existingNameType);
    this.description.setValue(this.existingDescription);
    this.msgFormatId.setValue({
      name: this.existingMsgFormatId.messageFormat,
      code: String(this.existingMsgFormatId.messageFormatId)
    })
  }

  setNewDataToModel(): Iso8583DialectMsgTemplate {
    this.iso8583DialectModel.nameType = this.nameType.value;
    this.iso8583DialectModel.description = this.description.value;
    this.iso8583DialectModel.messageFormat = new Iso8583FormatModel(Number(this.msgFormatId.value.code))
    return this.iso8583DialectModel;
  }

  onCreateIso8583Dialect() {
    this.showLoading = true;
    this.iso8583DialectService.onCreateIso8583Dialect(this.setNewDataToModel());
  }

  onUpdateIso8583Dialect() {
    this.showLoading = true;
    const newData = this.iso8583DialectService.createIso8583DialectFormData(this.existingNameType, this.setNewDataToModel());
    this.iso8583DialectService.onUpdateIso8583Dialect(newData, this.setNewDataToModel());
  }

  set MsgFormatOptionList(optionList: MessageFormatGroupInterface[]) {
    this.msgFormatOptionList = optionList;
  }

  get nameType() {
    return this.form.controls['nameType'];
  }

  get msgFormatId() {
    return this.form.controls['msgFormatId'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get existingNameType() {
    return this.iso8583DialectService.existingData.nameType;
  }

  get existingMsgFormatId() {
    return this.iso8583DialectService.existingData.messageFormat;
  }

  get existingDescription() {
    return this.iso8583DialectService.existingData.description;
  }
}
