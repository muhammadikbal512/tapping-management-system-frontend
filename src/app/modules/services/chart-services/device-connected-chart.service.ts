import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root',
})
export class DeviceConnectedChartService {
  constructor() {}

  public _option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      left: 'center',
      textStyle: {
        color: 'white',
      },
    },
    series: [
      {
        name: 'Device Connected',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
            color: 'white',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 50,
            name: 'Non Active',
            itemStyle: {
              color: 'red',
            },
          },
          {
            value: 100,
            name: 'Active',
            itemStyle: {
              color: '#087592',
            },
          },
        ],
      },
    ],
  };
}
