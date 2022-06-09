import { Component, OnInit } from '@angular/core';
import { NdcService } from 'src/app/modules/services/module-services/ndc.service';


@Component({
  selector: 'app-ndc',
  templateUrl: './ndc.component.html',
  styleUrls: ['./ndc.component.css']
})
export class NdcComponent implements OnInit {

  constructor(private ndcService: NdcService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.ndcService.openDialog();
  }

}
