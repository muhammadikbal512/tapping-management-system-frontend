import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration.service';
import { HeaderService } from 'src/app/modules/services/shared-service/header.service';

@Component({
  selector: 'app-header-config-create-update-dialog',
  templateUrl: './header-config-create-update-dialog.component.html',
  styleUrls: ['./header-config-create-update-dialog.component.css'],
})
export class HeaderConfigCreateUpdateDialogComponent implements OnInit {
  formGroup!: FormGroup;
  showClear: boolean = false;
  dialectmsgTemplateOptionList!: any[];
  disableStatus: boolean = false;
  showLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    public headerService: HeaderConfigurationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      fieldId: ['', Validators.required],
      description: ['', Validators.required],
      length: ['', Validators.required],
      format: ['', Validators.required],
      encoding: ['', Validators.required],
      configId: ['', Validators.required],
      conditionalId: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  onCreateHeaderConfig() {

  }

  onUpdateHeaderConfig() {

  }

  get fieldId() {
    return this.formGroup.controls['fieldId'];
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get length() {
    return this.formGroup.controls['length'];
  }

  get format() {
    return this.formGroup.controls['format'];
  }

  get encoding() {
    return this.formGroup.controls['encoding'];
  }

  get configId() {
    return this.formGroup.controls['configId'];
  }

  get conditionalId() {
    return this.formGroup.controls['conditionalId'];
  }

  get priority() {
    return this.formGroup.controls['priority'];
  }
}
