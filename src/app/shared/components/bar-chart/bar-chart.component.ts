import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EChartsOption } from 'echarts';
import { Observable } from 'rxjs';
import { ApiService, GetCoinsRes } from '../../services/api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  chartOption!: EChartsOption;
  coinsObservable$: Observable<GetCoinsRes>;

  constructor(
    private store: Store<{ coins: GetCoinsRes }>
  ) {
    this.coinsObservable$ = this.store.select('coins');
  }

  ngOnInit(): void {
    this.getCoins()
  }

  getCoins() {
    this.coinsObservable$.subscribe(res => {
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
