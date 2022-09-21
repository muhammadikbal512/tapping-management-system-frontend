import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchemeModel } from 'src/app/model/modules-model/scheme.model';
import { SchemeServiceService } from 'src/app/modules/services/module-services/scheme-service.service';
import { SchemeTableService } from 'src/app/modules/services/module-services/scheme-table.service';

@Component({
  selector: 'app-create-dialog-scheme',
  templateUrl: './create-dialog-scheme.component.html',
  styleUrls: ['./create-dialog-scheme.component.css'],
})
export class CreateDialogSchemeComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  schemeModel: SchemeModel = new SchemeModel();
  disableButton: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private schemeService: SchemeServiceService,
    private schemeTableService: SchemeTableService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.schemeService.buttonStatus == 'edit') {
      this.setExistingDataToModel();
      this.disableButton = !this.form.dirty;
      this.changeDetectorRef.detectChanges();
      this.onCheckingFormHasChange();
    }
  }

  ngOnInit(): void {
    this.createFormat();
  }

  private createFormat() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  onCheckingFormHasChange() {
    this.disableButton != this.form.dirty;

    this.form.valueChanges.subscribe((value) => {
      if (
        this.existingName != value.name ||
        this.existingDescription != value.description
      ) {
        this.disableButton = false;
      }

      if (
        this.existingName == value.name &&
        this.existingDescription == value.description
      ) {
        this.disableButton = true;
      }
    });
  }

  setNewDataToModal(): SchemeModel {
    this.schemeModel.name = this.name.value;
    this.schemeModel.description = this.description.value;
    return this.schemeModel;
  }

  setExistingDataToModel() {
    this.name.setValue(this.existingName);
    this.description.setValue(this.existingDescription);
  }

  onCreatePrivateScheme() {
    this.showLoading = true;
  }

  get name() {
    return this.form.controls['name'];
  }

  get description() {
    return this.form.controls['description'];
  }

  get existingName() {
    return this.schemeService.existingData.name;
  }

  get existingDescription() {
    return this.schemeService.existingData.description;
  }
}
