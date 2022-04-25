import { Injectable } from '@angular/core';
import * as echart from 'echarts';
import { WebsocketService } from '../websocket-service/websocket-service.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionStatusChartService {
  constructor(private webSocketService: WebsocketService) {}

  interval: any;
  public _pendingOptions: any
  public _updateOptions: any;

  private timeStamps = (function () {
    let now = new Date();
    let res = [];
    let len = 50;
    while (len--) {
      res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 1000);
    }
    return res;
  })();

  private success = (function () {
    let res = [];
    let len = 50;
    while (len--) {
      res.push(0);
    }
    return res;
  })();

  private failed = (function () {
    let res = [];
    let len = 50;
    while (len--) {
      res.push(0);
    }
    return res;
  })();

  private pending = (function () {
    let res = [];
    let len = 50;
    while (len--) {
      res.push(0);
    }
    return res;
  })();

  private timeout = (function () {
    let res = [];
    let len = 50;
    while (len--) {
      res.push(0);
    }
    return res;
  })();

  public _successFailed: echarts.EChartsOption = {
    grid: {
      top: 100,
      // bottom: 100,
    },
    title: {
      text: 'Transactions',
      show: true,
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56',
        },
      },
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        magicType: {
          type: ['line', 'bar'],
        },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: {
      id: 'dataZoomX',
      type: 'inside',
      filterMode: 'filter',
    },
    xAxis: [
      {
        type: 'category',
        data: this.timeStamps,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Total',
        boundaryGap: [0, 0],
      },
    ],
    series: [
      {
        name: 'Success',
        type: 'line',
        data: this.success,
        
        lineStyle: {color: '#4caf50'},
        itemStyle: {color: '#4caf50'},
        symbol: 'none'
      },
      {
        name: 'Failed',
        type: 'line',
        data: this.failed,
        
        lineStyle: {color: '#e91e63'},
        itemStyle: {color: '#e91e63'},
        symbol: 'none'
      }
    ],
  };

  public _pendingTimeout: echarts.EChartsOption = {
    grid: {
      top: 100,
      // bottom: 100,
    },
    title: {
      text: 'Transactions',
      show: true,
      textStyle: {
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56',
        },
      },
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        magicType: {
          type: ['line', 'bar'],
        },
        restore: {},
        saveAsImage: {},
      },
    },
    dataZoom: {
      id: 'dataZoomX',
      type: 'inside',
      filterMode: 'filter',
    },
    xAxis: [
      {
        type: 'category',
        data: this.timeStamps,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Total',
        boundaryGap: [0, 0],
      },
    ],
    series: [
      {
        name: 'Pending',
        type: 'line',
        data: this.pending,
        lineStyle: {color: '#ffeb3b'},
        itemStyle: {color: '#ffeb3b'},
        symbol: "none"
      },
      {
        name: 'Timeout',
        type: 'line',
        data: this.timeout,
        lineStyle: {color: '#000000'},
        itemStyle: {color: '#000000'},
        symbol: 'none'
      }
    ],
  };


  public chartRateTimer() {
    this.interval = setInterval(() => {
      let axisData = new Date().toLocaleTimeString().replace(/^\D/, '');
      this.success.shift();
      this.success.push(Math.round(Math.random() * 100));

      this.failed.shift();
      this.failed.push(Math.round(Math.random() * 10))

      this.pending.shift();
      this.pending.push(Math.round(Math.random() * 20))

      this.timeout.shift();
      this.timeout.push(Math.round(Math.random() * 5))

      this.timeStamps.shift();
      this.timeStamps.push(axisData);
      this._pendingOptions = {
        xAxis: [
          {
            data: this.timeStamps
          },
        ],
        series: [
          {
            data: this.pending
          },
          {
            data: this.timeout
          },
        ],
      };
      this._updateOptions = {
        xAxis: [
          {
            data: this.timeStamps
          },
        ],
        series: [
          {
            data: this.success
          },
          {
            data: this.failed
          },
        ],
      };
    }, 500)
  }


}
