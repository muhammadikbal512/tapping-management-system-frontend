import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';

@Component({
  selector: 'app-app-layer',
  templateUrl: './app-layer.component.html',
  styleUrls: ['./app-layer.component.css'],
})
export class AppLayerComponent implements OnInit {
  constructor(public transactionApiService: TransactionService) {}
  appTransId: number = 0;

  ngOnInit(): void {}
}
