import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';

@Component({
  selector: 'app-physical-layer',
  templateUrl: './physical-layer.component.html',
  styleUrls: ['./physical-layer.component.css'],
})
export class PhysicalLayerComponent implements OnInit {
  constructor(public transactionApiService: TransactionService) {}

  ngOnInit(): void {}
}
