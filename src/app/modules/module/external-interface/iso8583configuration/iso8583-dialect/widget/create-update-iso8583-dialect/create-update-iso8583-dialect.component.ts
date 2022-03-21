import { Component, OnInit } from '@angular/core';
import { MessageFormatGroupInterface } from 'src/app/interface/modules/message-format-group-interface';


@Component({
  selector: 'app-create-update-iso8583-dialect',
  templateUrl: './create-update-iso8583-dialect.component.html',
  styleUrls: ['./create-update-iso8583-dialect.component.css']
})
export class CreateUpdateIso8583DialectComponent implements OnInit {
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
