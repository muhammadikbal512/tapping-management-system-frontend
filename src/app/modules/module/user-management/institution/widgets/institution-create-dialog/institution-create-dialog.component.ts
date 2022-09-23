import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';

@Component({
  selector: 'app-institution-create-dialog',
  templateUrl: './institution-create-dialog.component.html',
  styleUrls: ['./institution-create-dialog.component.css'],
})
export class InstitutionCreateDialogComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  institutionModel: InstitutionModel = new InstitutionModel();
  disableButton: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    public institutionService: InstitutionService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.institutionService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.disableButton = !this.form.dirty;
      this.onCheckingFormHasChange();
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  createFormat() {
    this.form = this.fb.group({
      institutionName: ['', Validators.required],
      description: [''],
    });
  }

  onCheckingFormHasChange() {
    this.disableButton != this.form.dirty;

    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingInstitutionName != value.institutionName ||
        this.existingDescription != value.description
      ) {
        this.disableButton = false;
      }

      if (
        this.existingInstitutionName == value.institutionName &&
        this.existingDescription == value.description
      ) {
        this.disableButton = true;
      }
    });
  }

  setExistingDataToModel() {
    this.institutionName.setValue(this.existingInstitutionName);
    this.description.setValue(this.existingDescription);
  }

  NewDataToModel(): InstitutionModel {
    this.institutionModel.institutionName = this.institutionName.value;
    this.institutionModel.description = this.description.value;
    return this.institutionModel;
  }

  onCreateInstitution() {
    this.showLoading = true;
    this.institutionService.onAddInstitution(this.NewDataToModel());
  }

  onUpdateInstitution() {
    this.showLoading = true;
    const newData = this.institutionService.createInstitutionFormData(
      this.existingInstitutionName,
      this.NewDataToModel()
    );
    this.institutionService.onUpdateInstitution(newData)
  }

  get institutionName() {
    return this.form.controls['institutionName'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get existingInstitutionName() {
    return this.institutionService.existingData.institutionName;
  }

  get existingDescription() {
    return this.institutionService.existingData.description;
  }
}
