import { Component, OnInit } from '@angular/core';
import { MessageFormatGroupInterface } from 'src/app/interface/modules/message-format-group-interface';


@Component({
  selector: 'app-create-update-dialog-type',
  templateUrl: './create-update-dialog-type.component.html',
  styleUrls: ['./create-update-dialog-type.component.css']
})
export class CreateUpdateDialogTypeComponent implements OnInit {

  cities: MessageFormatGroupInterface[];

  selectedCity: MessageFormatGroupInterface | undefined;
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {
  }

}
