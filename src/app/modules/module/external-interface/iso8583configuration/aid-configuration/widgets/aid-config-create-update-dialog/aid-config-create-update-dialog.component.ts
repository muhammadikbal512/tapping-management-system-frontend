import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AidConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration.service';

@Component({
  selector: 'app-aid-config-create-update-dialog',
  templateUrl: './aid-config-create-update-dialog.component.html',
  styleUrls: ['./aid-config-create-update-dialog.component.css'],
})
export class AidConfigCreateUpdateDialogComponent implements OnInit {
  formGroup!: FormGroup;
  showLoading: boolean = false;
  disableStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    public aidConfigService: AidConfigurationService
  ) {}

  ngOnInit(): void {
    this.createFormat();
  }

  createFormat() {
    this.formGroup = this.fb.group({
      aidNumber: ['', Validators.required],
      label: ['', Validators.required],
    });
  }

  onCreateAidNumber() {}

  onUpdateAidNumber() {}

  get aidNumber() {
    return this.formGroup.controls['aidNumber'];
  }

  get label() {
    return this.formGroup.controls['label'];
  }
}
