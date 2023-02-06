import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/investigation/alert-investigation.service';

@Component({
  selector: 'app-investigation-history',
  templateUrl: './investigation-history.component.html',
  styleUrls: ['./investigation-history.component.css'],
})
export class InvestigationHistoryComponent implements OnInit {
  investHistories!: any;
  constructor(private http: HttpClient, public investigationService: AlertInvestigationService) {}

  ngOnInit(): void {
      this.investigationService.getAllAlertInvestigation().subscribe((response) => {
        this.investHistories = response
      })
  }
}
