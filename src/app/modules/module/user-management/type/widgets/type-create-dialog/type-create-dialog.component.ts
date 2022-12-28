import {
  ChangeDetectorRef,
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeService } from 'src/app/modules/services/module-services/user-management/type.service';
import { TypeModel } from 'src/app/model/modules-model/type.model';

@Component({
  selector: 'app-type-create-dialog',
  templateUrl: './type-create-dialog.component.html',
  styleUrls: ['./type-create-dialog.component.css'],
})
export class TypeCreateDialogComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  typeModel: TypeModel = new TypeModel();
  disableButton: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    public typeService: TypeService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.typeService.buttonStatus == 'edit') {
      this.setExistingDataToDialog();
      this.disableButton = !this.form.dirty;
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  private createFormat() {
    this.form = this.fb.group({
      typeName: ['', Validators.required],
    });
  }

  onCheckingFormHasChange() {
    this.form.valueChanges.subscribe((value) => {
      if (this.typeName != value.typeName) {
        this.disableButton = false;
      }
      if (this.typeName == value.typeName) {
        this.disableButton = true;
      }
    });
  }

  setExistingDataToDialog() {
    this.typeName.setValue(this.existingtypeName);
  }

  setNewDataToModel(): TypeModel {
    this.typeModel.typeName = this.typeName.value;
    return this.typeModel;
  }

  onCreateType() {
    this.showLoading = true;
    this.typeService.onAddType(this.setNewDataToModel());
  }

  onUpdateType() {
    this.showLoading = true;
    const newData = this.typeService.createTypeFormData(
      this.existingtypeName,
      this.setNewDataToModel()
    );
    this.typeService.onUpdateType(newData);
  }

  get typeName() {
    return this.form.controls['typeName'];
  }

  get existingtypeName() {
    return this.typeService.existingData.typeName;
  }
}
