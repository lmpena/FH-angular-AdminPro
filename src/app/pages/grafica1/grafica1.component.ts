import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[];
  public data1: ChartData<'doughnut'>;

  constructor() {
    this.labels1 = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    this.data1= {
      labels: this.labels1,
      datasets: [
        { data: [ 50, 50, 300 ] },
      ]
    };
    
  }




}
