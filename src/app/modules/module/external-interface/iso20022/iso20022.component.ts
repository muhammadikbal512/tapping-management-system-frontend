import { Component, OnInit } from '@angular/core';
import { Iso20022Service } from 'src/app/modules/services/module-services/iso20022.service';

@Component({
  selector: 'app-iso20022',
  templateUrl: './iso20022.component.html',
  styleUrls: ['./iso20022.component.css'],
})
export class Iso20022Component implements OnInit {
  constructor(private iso20022Service: Iso20022Service) {}

  ngOnInit(): void {}

  openDialog() {
    this.iso20022Service.buttonStatus = 'create';
    this.iso20022Service.openDialog();
  }
}
