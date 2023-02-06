import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction/transaction-table.service';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-virtual',
  templateUrl: './transaction-virtual.component.html',
  styleUrls: ['./transaction-virtual.component.css'],
})
export class TransactionVirtualComponent implements OnInit {
  constructor(
    private transactionApiService: TransactionService,
    private transactionTableService: TransactionTableService
  ) {}

  ngOnInit(): void {}

  options: EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20,
        },
        data: [
          {
            name: 'ATM',
            x: 300,
            y: 300,
            symbolSize: 100,
          },
          {
            name: 'Switching',
            x: 400,
            y: 300,
            symbolSize: 100,
          },
          {
            name: 'HSM',
            x: 500,
            y: 300,
            symbolSize: 100,
          },
        ],
        // links: [],
        links: [
          {
            source: 0,
            target: 1,
          },
          {
            source: 'Switching',
            target: 'HSM',
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
        },
      },
    ],
  };
}
