import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadialBarChartComponent } from './components/radial-bar-chart/radial-bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

const COMPONENTS_TO_EXPORT = [
  BarChartComponent,
  RadialBarChartComponent,
  LineChartComponent
]

const MODULES_TO_EXPORT = [
  // RouterModule
]

@NgModule({
  declarations: [
    ...COMPONENTS_TO_EXPORT
  ],
  imports: [
    CommonModule,
    // ...MODULES_TO_EXPORT,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    ...COMPONENTS_TO_EXPORT,
    // ...MODULES_TO_EXPORT
  ]
})
export class SharedModule { }
