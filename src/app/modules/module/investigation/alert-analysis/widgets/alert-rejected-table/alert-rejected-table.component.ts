import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-rejected-table',
  templateUrl: './alert-rejected-table.component.html',
  styleUrls: ['./alert-rejected-table.component.css'],
})
export class AlertRejectedTableComponent implements OnInit {
  cols!: any[];
  rejecteds!: any[];
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'privateScheme', header: 'Private Scheme' },
      { field: 'entityValue', header: 'Entity Value' },
      { field: 'inQueue', header: 'In Queue' },
      { field: 'status', header: 'Status' },
      { field: 'comment', header: 'Comment' },
    ];
    this.getRejected();
  }

  getRejected() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
