import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';
import { TransactionTypeService } from 'src/app/modules/services/module-services/external-interfaces/transaction-type.service';

@Component({
  selector: 'app-transaction-type-create-update-dialog',
  templateUrl: './transaction-type-create-update-dialog.component.html',
  styleUrls: ['./transaction-type-create-update-dialog.component.css'],
})
export class TransactionTypeCreateUpdateDialogComponent
  implements OnInit, AfterViewInit
{
  form!: FormGroup;
  showLoading: boolean = false;
  disableStatus: boolean = false;
  showClear: boolean = false;
  transTypeModel: TransactionTypeModel = new TransactionTypeModel();
  configIds!: any;
  constructor(
    private fb: FormBuilder,
    public transTypeService: TransactionTypeService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    if (this.transTypeService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  createFormat() {
    this.form = this.fb.group({
      transType: ['', Validators.required],
      description: ['', Validators.required],
      isoConfiguration: ['', Validators.required],
    });
  }

  setNewDataToModel(): TransactionTypeModel {
    this.transTypeModel.transType = this.transType.value;
    this.transTypeModel.description = this.description.value;
    this.transTypeModel.isoConfiguration = new IsoConfigurationModel(
      Number(this.isoConfiguration.value.code)
    );
    return this.transTypeModel;
  }

  onCheckingFormHasChange() {
    this.disableStatus = !this.form.dirty;
    this.form.valueChanges.subscribe((value) => {
      if (
        this.transType != value.transType ||
        this.description != value.description ||
        this.isoConfiguration != value.isoConfiguration
      ) {
        this.disableStatus = false;
      }

      if (
        this.transType == value.transType &&
        this.description &&
        value.description &&
        this.isoConfiguration &&
        value.isoConfiguration
      ) {
        this.disableStatus = true;
      }
    });
  }

  setExistingDataToModel() {
    this.transType.setValue(this.existingTransType);
    this.description.setValue(this.existingDescription);
    this.isoConfiguration.setValue({
      name: this.existingIsoConfiguration.name,
      code: String(this.existingIsoConfiguration.id),
    });
  }

  onCreateTransTypeMapping() {
    this.transTypeService.onAddTransactionType(this.setNewDataToModel());
  }

  onUpdateTransTypeMapping() {
    const newData = this.transTypeService.createTransType(
      this.existingId,
      this.setNewDataToModel()
    );

    this.transTypeService.onUpdateTransactionType(
      newData,
      this.setNewDataToModel()
    );
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  get existingId() {
    return this.transTypeService.existingData.id;
  }

  get transType() {
    return this.form.controls['transType'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get isoConfiguration() {
    return this.form.controls['isoConfiguration'];
  }

  get existingTransType() {
    return this.transTypeModel.transType;
  }

  get existingDescription() {
    return this.transTypeModel.description;
  }

  get existingIsoConfiguration() {
    return this.transTypeModel.isoConfiguration;
  }
}
