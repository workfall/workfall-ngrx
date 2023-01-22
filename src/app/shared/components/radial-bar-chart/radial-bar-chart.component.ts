import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EChartsOption } from 'echarts';
import { Observable, Subscription } from 'rxjs';
import { GetCoinsRes } from '../../services/api.service';

@Component({
  selector: 'app-radial-bar-chart',
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.scss']
})
export class RadialBarChartComponent implements OnInit {
  chartOption!: EChartsOption;

  coinsObservable$: Observable<GetCoinsRes>;
  coinsObservableSubscription$!: Subscription;

  constructor(
    private store: Store<{ coins: GetCoinsRes }>
  ) {
    this.coinsObservable$ = this.store.select('coins');
  }

  ngOnInit(): void {
    this.getCoins()
  }

  getCoins() {
    this.coinsObservableSubscription$ = this.coinsObservable$.subscribe(res => {
      this.chartOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params: any) {
            return params[0].name + ': ' + params[0].value;
          }
        },
        xAxis: {
          data: [...res.data.coins.map(coin => coin.symbol)],
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            // color: '#e54035'
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        },
        // color: ['#e54035'],
        series: [
          {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              opacity: 0.5
            },
            emphasis: {
              itemStyle: {
                opacity: 1
              }
            },
            data: [...res.data.coins.map(coin => +coin.price)],
            z: 10
          },
          {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 50,
            symbolOffset: [0, '-120%'],
            data: [
              ...res.data.coins.map(coin => {
                return {
                  value: coin.price,
                  // symbol: coin.iconUrl,
                  // symbolSize: [60, 60]
                }
              }),
            ]
          }
        ]
      }
    })
  }
}
