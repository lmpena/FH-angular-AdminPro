import { Component, Input } from '@angular/core';


import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
 
  @Input() titulo:string='Sin título';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'label2' ];

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {

    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
    
  };

  public doughnutChartType: ChartType = 'doughnut';

  // public colors:Color[] = [
  //   { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  // ];

  get getTitulo() {
    return this.titulo;
  }

}
