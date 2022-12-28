import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';

@Component({
  selector: 'app-investigation-history',
  templateUrl: './investigation-history.component.html',
  styleUrls: ['./investigation-history.component.css'],
})
export class InvestigationHistoryComponent implements OnInit {
  investHistories!: any;
  constructor(private http: HttpClient, public investigationService: AlertInvestigationService) {}

  ngOnInit(): void {
    this.http
      .get(`assets/data/dummy/investigation/investigation.json`)
      .subscribe((response) => {
        this.investHistories = response;
      });
  }
}
