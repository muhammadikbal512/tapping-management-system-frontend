import { Component, OnInit } from '@angular/core';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/investigation/alert-investigation.service';

@Component({
  selector: 'app-classify-queue',
  templateUrl: './classify-queue.component.html',
  styleUrls: ['./classify-queue.component.css'],
})
export class ClassifyQueueComponent implements OnInit {
  constructor(public investigationService: AlertInvestigationService) {}

  ngOnInit(): void {}
}
