import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping-create-dialog',
  templateUrl: './iso8583-response-mapping-create-dialog.component.html',
  styleUrls: ['./iso8583-response-mapping-create-dialog.component.css'],
})
export class Iso8583ResponseMappingCreateDialogComponent implements OnInit {
  formGroup!: FormGroup;
  showLoading: boolean = false;
  disableStatus: boolean = false;
  showClear: boolean = false;
  configIds!: any;
  constructor(
    private fb: FormBuilder,
    public responseService: ResponseMappingService
  ) {}

  ngOnInit(): void {
    this.createFormat();
  }

  onCreateResponseCodeMapping() {}

  onUpdateResponseCodeMapping() {}

  createFormat() {
    this.formGroup = this.fb.group({
      transactionType: ['', Validators.required],
      description: ['', Validators.required],
      configId: ['', Validators.required],
    });
  }

  onChange($event: any) {
    this.showClear = $event != '' && $event != null;
  }

  get transactionType() {
    return this.formGroup.controls['transactionType'];
  }

  get description() {
    return this.formGroup.controls['description'];
  }

  get configId() {
    return this.formGroup.controls['configId'];
  }
}
