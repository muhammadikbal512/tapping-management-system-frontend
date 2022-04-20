import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.css']
})
export class TransactionStatusComponent implements OnInit {
  @Input() status: string = '';
  updateDate: any;
  data1!: number;
  data2!: number;
  data3!: number;
  data4!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.updateDate = new Date().toLocaleString().replace(' AM', '').replace(' PM', '');
    setInterval(() => {
      this.updateDate = new Date().toLocaleString().replace(' AM', '').replace(' PM', '');
      this.data1 = (Math.round(Math.random() * 100));
      this.data2 = (Math.round(Math.random() * 50));
      this.data3 = (Math.round(Math.random() * 70));
      this.data4 = (Math.round(Math.random() * 30));
    }, 3000)
   
  }

  
}
