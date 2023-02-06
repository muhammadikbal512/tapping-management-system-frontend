import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { MessageFormatService } from 'src/app/modules/services/module-services/message-format/message-format.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';

@Component({
  selector: 'app-create-update-dialog-iso8583-format-table',
  templateUrl: './create-update-dialog-iso8583-format-table.component.html',
  styleUrls: ['./create-update-dialog-iso8583-format-table.component.css'],
})
export class CreateUpdateDialogIso8583FormatTableComponent
  implements OnInit, AfterViewInit
{
  form!: FormGroup;
  iso8583FormatModel: Iso8583FormatModel = new Iso8583FormatModel();
  disableButton: boolean = false;
  showClearButton: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    public iso8583FormatService: MessageFormatService
  ) {}

  ngOnInit(): void {
    this.createFormat();
    
  }

  ngAfterViewInit(): void {
    if (this.iso8583FormatService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.disableButton = !this.form.dirty;
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  private createFormat() {
    this.form = this.fb.group({
      messageFormat: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingMessageFormat != value.messageFormat ||
        this.existingDescription != value.description
      ) {
        this.disableButton = false;
      }

      if (
        this.existingMessageFormat == value.messageFormat &&
        this.existingDescription == value.description
      ) {
        this.disableButton = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.messageFormat.setValue(this.existingMessageFormat);
    this.description.setValue(this.existingDescription);
  }

  setNewDataToModel(): Iso8583FormatModel {
    this.iso8583FormatModel.messageFormat = this.messageFormat.value;
    this.iso8583FormatModel.description = this.description.value;
    return this.iso8583FormatModel;
  }

  onCreateIso8583Format() {
    this.showLoading = true;
    this.iso8583FormatService.onCreateIso8583Format(this.setNewDataToModel());
  }

  onUpdateIso8583Format() {
    const newData = this.iso8583FormatService.createIso8583FormatFormData(
      this.existingMessageFormat,
      this.setNewDataToModel()
    );
    this.iso8583FormatService.onUpdateIso8583Format(newData);
  }

  get messageFormat() {
    return this.form.controls['messageFormat'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get existingMessageFormat() {
    return this.iso8583FormatService.existingData.messageFormat;
  }

  get existingDescription() {
    return this.iso8583FormatService.existingData.description;
  }
}
