import { Component, OnInit } from '@angular/core';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-iso8583-response-mapping-create-dialog',
  templateUrl: './iso8583-response-mapping-create-dialog.component.html',
  styleUrls: ['./iso8583-response-mapping-create-dialog.component.css'],
})
export class Iso8583ResponseMappingCreateDialogComponent implements OnInit {
  form!: FormGroup;
  disableButton: boolean = false;
  constructor(public responseService: ResponseMappingService, fb: FormBuilder) {}

  ngOnInit(): void {}

  onCreateResponseMapping() {}

  onUpdateResponseMapping() {}
}
