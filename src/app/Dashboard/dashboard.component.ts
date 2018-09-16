import { Component } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Total de Vendas por Setor';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  ngOnInit(): void {

    //Piechart1 Data & Config
    this.data1 = [['Number', 'Slices'],
    ['Item 1 do Grafico', 42],
    ['Item 2 do Grafico', 8],
    ['Item 3 do Grafico', 30],
    ['Item 4 do Grafico', 20]];

    this.config1 = new PieChartConfig('', 0.4);
    this.elementId1 = 'myPieChart1';

  }

}
