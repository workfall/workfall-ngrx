import { Component } from '@angular/core';

export type NavItem = workfall.models.NavItem

@Component({
  selector: 'app-visualizations',
  templateUrl: './visualizations.component.html',
  styleUrls: ['./visualizations.component.scss']
})
export class VisualizationsComponent {
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

  constructor() {}
}
