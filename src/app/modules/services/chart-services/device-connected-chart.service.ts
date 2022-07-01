import { Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class DeviceConnectedChartService {

  constructor() { }

  public _option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      
      left: 'center'
    },
    series: [
      {
        name: 'Device Connected',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 50, name: 'Non Active' },
          { value: 100, name: 'Active' },
        ]
      }
    ]
  }
}
