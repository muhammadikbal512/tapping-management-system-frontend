import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-virtual',
  templateUrl: './transaction-virtual.component.html',
  styleUrls: ['./transaction-virtual.component.css'],
})
export class TransactionVirtualComponent implements OnInit {
  constructor(private transactionApiService: TransactionService) {}

  ngOnInit(): void {}

  options: EChartsOption = {
    title: {
      text: 'Simple Graph',
    },
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
            name: 'ATMBlock',
            label: {
              show: false,
            },
            x: 300,
            y: 370,
            symbolSize: [80, 300],
            symbol: 'rect',
          },
          {
            name: 'Switching',
            x: 400,
            y: 300,
            symbolSize: 100,
          },
          {
            name: 'SwitchingBlock',
            label: {
              show: false,
            },
            x: 400,
            y: 370,
            symbolSize: [80, 300],
            symbol: 'rect',
          },
          {
            name: 'HSM',
            x: 500,
            y: 300,
            symbolSize: 100,
          },
          {
            name: 'HSMBlock',
            label: {
              show: false,
            },
            x: 500,
            y: 370,
            symbolSize: [80, 300],
            symbol: 'rect',
          },
        ],
        // links: [],
        links: [
          {
            source: 'ATM',
            target: 'ATMBlock',
          },
          {
            source: 'ATMBlock',
            target: 'SwitchingBlock',
            label: {
              position: 'start',
            },
          },
          {
            source: 'SwitchingBlock',
            target: 'ATMBlock',
            label: {
              position: 'middle',
            },
          },
          {
            source: 'ATMBlock',
            target: 'SwitchingBlock',
          },
          {
            source: 'ATMBlock',
            target: 'SwitchingBlock',
          },
          {
            source: 'Switching',
            target: 'SwitchingBlock',
          },

          {
            source: 'HSM',
            target: 'HSMBlock',
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  };
}
