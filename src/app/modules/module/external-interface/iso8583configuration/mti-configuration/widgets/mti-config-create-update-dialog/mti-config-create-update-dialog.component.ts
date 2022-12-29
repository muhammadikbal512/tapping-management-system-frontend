import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration.service';

@Component({
  selector: 'app-mti-config-create-update-dialog',
  templateUrl: './mti-config-create-update-dialog.component.html',
  styleUrls: ['./mti-config-create-update-dialog.component.css'],
})
export class MtiConfigCreateUpdateDialogComponent implements OnInit {
  formGroup!: FormGroup;
  showLoading: boolean = false;
  disableStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    public mtiConfigService: MtiConfigurationService
  ) {}

  ngOnInit(): void {
    this.createFormat();
  }

  createFormat() {
    this.formGroup = this.fb.group({
      mti: ['', Validators.required],
      response: ['', Validators.required],
      reversal: ['', Validators.required],
    });
  }

  onCreateMtiConfiguration() {}

  onUpdateMtiConfiguration() {}

  get mti() {
    return this.formGroup.controls['mti'];
  }

  get response() {
    return this.formGroup.controls['response'];
  }

  get reversal() {
    return this.formGroup.controls['reversal'];
  }
}
