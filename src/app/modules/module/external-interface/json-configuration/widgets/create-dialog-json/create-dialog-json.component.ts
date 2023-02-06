import { Component, OnInit } from '@angular/core';
import { JsonConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/json-configuration.service';

@Component({
  selector: 'app-create-dialog-json',
  templateUrl: './create-dialog-json.component.html',
  styleUrls: ['./create-dialog-json.component.css']
})
export class CreateDialogJsonComponent implements OnInit {
  disableButton: boolean = false;
  constructor(public jsonService: JsonConfigurationService) { }

  ngOnInit(): void {
  }

}
