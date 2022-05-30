import { Component, OnInit } from '@angular/core';
import { AlertIssuerService } from 'src/app/modules/services/module-services/alert-issuer.service';


@Component({
  selector: 'app-alert-issuer',
  templateUrl: './alert-issuer.component.html',
  styleUrls: ['./alert-issuer.component.css']
})
export class AlertIssuerComponent implements OnInit {

  constructor(private alertService: AlertIssuerService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.alertService.showDialog();
  }

}
