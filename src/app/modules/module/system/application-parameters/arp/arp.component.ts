import { Component, OnInit } from '@angular/core';
import { AppParametersService } from 'src/app/modules/services/module-services/app-parameters.service';


@Component({
  selector: 'app-arp',
  templateUrl: './arp.component.html',
  styleUrls: ['./arp.component.css']
})
export class ArpComponent implements OnInit {

  constructor(private appService: AppParametersService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.appService.openDialog();
  }

}
