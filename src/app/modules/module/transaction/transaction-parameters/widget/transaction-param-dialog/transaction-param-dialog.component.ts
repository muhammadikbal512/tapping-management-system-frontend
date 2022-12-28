import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction/transaction-parameters.service';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';

@Component({
  selector: 'app-transaction-param-dialog',
  templateUrl: './transaction-param-dialog.component.html',
  styleUrls: ['./transaction-param-dialog.component.css'],
})
export class TransactionParamDialogComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  transactionParametersModel: TransactionParametersModel = new TransactionParametersModel();
  disableButton: boolean = false;
  showClearButton: boolean = false;
  showLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    public transactionParametersService: TransactionParametersService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    if (this.transactionParametersService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.disableButton = !this.form.dirty;
      this.onCheckingFormHasChange;
      this.changeDetectorRef.detectChanges();
    }
  }

  private createForm() {
    this.form = this.fb.group({
      attributeName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onChange($event: any) {
    this.showClearButton = $event != '' && $event != null;
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingAttributeName != value.attributeName ||
        this.existingDescription != value.description
      ) {
        this.disableButton = false;
      }

      if (
        this.existingAttributeName == value.attributeName &&
        this.existingDescription == value.description
      ) {
        this.disableButton = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.attributeName.setValue(this.existingAttributeName);
    this.description.setValue(this.existingDescription);
  }

  setNewDataToModel(): TransactionParametersModel {
    this.transactionParametersModel.attributeName = this.attributeName.value;
    this.transactionParametersModel.description = this.description.value;
    return this.transactionParametersModel;
  }

  onCreateTransactionParameters() {
    this.showLoading = true;
    this.transactionParametersService.onCreateTransactionParameters(this.setNewDataToModel());
  }

  onUpdateTransactionParameters() {
    this.showLoading = true;
    const newData =
      this.transactionParametersService.createTransactionParametersFormData(
        this.existingAttributeName,
        this.setNewDataToModel()
      );
    this.transactionParametersService.onUpdateTransactionParameters(newData);
  }

  get attributeName() {
    return this.form.controls['attributeName'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get existingAttributeName() {
    return this.transactionParametersService.existingData.attributeName;
  }

  get existingDescription() {
    return this.transactionParametersService.existingData.description;
  }
}
