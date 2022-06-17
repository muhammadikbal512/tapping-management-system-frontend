import { Component, OnInit } from '@angular/core';
import { AlertAnalysisService } from 'src/app/modules/services/module-services/alert-analysis.service';


@Component({
  selector: 'app-alert-analysis',
  templateUrl: './alert-analysis.component.html',
  styleUrls: ['./alert-analysis.component.css']
})
export class AlertAnalysisComponent implements OnInit {

  constructor(private alertService: AlertAnalysisService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.alertService.openDialog();
  }

}
