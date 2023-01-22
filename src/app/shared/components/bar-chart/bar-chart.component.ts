import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ApiService, GetCoinsRes } from '../../services/api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
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
            type: 'bar',
          },
        ],
      }

    })
  }
}
