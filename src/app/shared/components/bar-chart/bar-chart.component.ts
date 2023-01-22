import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EChartsOption } from 'echarts';
import { Observable, Subscription } from 'rxjs';
import { GetCoinsRes } from '../../services/api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.coinsObservableSubscription$.unsubscribe()
  }

  getCoins() {
    this.coinsObservableSubscription$ = this.coinsObservable$.subscribe(res => {
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
