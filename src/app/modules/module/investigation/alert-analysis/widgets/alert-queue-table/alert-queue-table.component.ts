import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-queue-table',
  templateUrl: './alert-queue-table.component.html',
  styleUrls: ['./alert-queue-table.component.css'],
})
export class AlertQueueTableComponent implements OnInit {
  cols!: any[];
  queues!: any[];
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'privateScheme', header: 'Private Scheme' },
      { field: 'ruleId', header: 'Rule Id' },
      { field: 'ruleName', header: 'Rule Name' },
      { field: 'entityType', header: 'Entity Type' },
      { field: 'inQueue', header: 'In Queue' },
    ];
    this.getQueues();
  }

  getQueues() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
