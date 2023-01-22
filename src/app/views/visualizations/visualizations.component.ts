import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCoinsRes } from 'src/app/shared/services/api.service';
import { getCoinsAction } from 'src/app/store/actions/coins.actions';

export type NavItem = workfall.models.NavItem

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.scss']
})
export class VisualizationsComponent implements OnInit {
  navItems: NavItem[] = [
    {
      label: 'Bar Chart',
      url: '',
      active: true
    },
    {
      label: 'Line Chart',
      url: 'line-chart',
      active: false
    },
    {
      label: 'Radial Bar Chart',
      url: 'radial-chart',
      active: false
    }
  ];

  constructor(
    private store: Store<{ coins: GetCoinsRes }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCoinsAction())
  }
}
