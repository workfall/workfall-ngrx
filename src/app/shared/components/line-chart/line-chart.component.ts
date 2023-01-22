import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  chartOption!: EChartsOption;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getCoins()
  }

  getCoins() {
    this.apiService.getCoins().subscribe(res => {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: [...res.data.coins.map(coin => coin.symbol)],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [...res.data.coins.map(coin => +coin.price)],
            type: 'line',
            smooth: true
          },
        ],
      }
    })
  }
}
