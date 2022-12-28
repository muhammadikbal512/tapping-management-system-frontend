import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping-action-button',
  templateUrl: './iso8583-response-mapping-action-button.component.html',
  styleUrls: ['./iso8583-response-mapping-action-button.component.css'],
})
export class Iso8583ResponseMappingActionButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
