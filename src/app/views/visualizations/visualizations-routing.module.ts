import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from 'src/app/shared/components/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';
import { RadialBarChartComponent } from 'src/app/shared/components/radial-bar-chart/radial-bar-chart.component';
import { VisualizationsComponent } from './visualizations.component';

const routes: Routes = [
  {
    path: '',
    component: VisualizationsComponent,
    children: [
      {
        path: '',
        component: BarChartComponent
      },
      {
        path: 'line-chart',
        component: LineChartComponent
      },
      {
        path: 'radial-chart',
        component: RadialBarChartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizationsRoutingModule { }
