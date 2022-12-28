import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';

@Component({
  selector: 'app-network-layer',
  templateUrl: './network-layer.component.html',
  styleUrls: ['./network-layer.component.css'],
})
export class NetworkLayerComponent implements OnInit {
  constructor(public transactionApiService: TransactionService) {}

  ngOnInit(): void {}
}
