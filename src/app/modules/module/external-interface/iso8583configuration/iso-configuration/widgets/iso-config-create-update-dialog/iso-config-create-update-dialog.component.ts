import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration.service';

@Component({
  selector: 'app-iso-config-create-update-dialog',
  templateUrl: './iso-config-create-update-dialog.component.html',
  styleUrls: ['./iso-config-create-update-dialog.component.css'],
})
export class IsoConfigCreateUpdateDialogComponent implements OnInit {
  formGroup!: FormGroup;
  showLoading: boolean = false;
  disableStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    public isoConfigService: IsoConfigurationService
  ) {}

  createFormat() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      hasHeader: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createFormat();
  }

  onCreateIsoConfiguration() {

  }

  onUpdateIsoConfiguration() {
    
  }

  get name() {
    return this.formGroup.controls['name'];
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get hasHeader() {
    return this.formGroup.controls['hasHeader'];
  }
}
