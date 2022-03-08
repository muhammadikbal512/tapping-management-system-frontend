import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.css']
})
export class TransactionStatusComponent implements OnInit {
  myDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
