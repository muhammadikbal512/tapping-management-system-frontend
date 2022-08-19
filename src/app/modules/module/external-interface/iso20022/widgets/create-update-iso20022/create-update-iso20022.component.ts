import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';
import { Iso20022Service } from 'src/app/modules/services/module-services/iso20022.service';

@Component({
  selector: 'app-create-update-iso20022',
  templateUrl: './create-update-iso20022.component.html',
  styleUrls: ['./create-update-iso20022.component.css'],
})
export class CreateUpdateIso20022Component implements OnInit {
  form!: FormGroup;
  showClear: boolean = false;
  disableButton: boolean = false;
  ISO20022Model: Iso20022Model = new Iso20022Model();

  constructor(
    private fb: FormBuilder,
    public iso20022Service: Iso20022Service,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.iso20022Service.onGetAllIso20022();
  }

  createForm() {
    this.form = this.fb.group({})
  }
}
