import { Component } from '@angular/core';
import { ColChartConfig } from './../Models/ColChartConfig';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component {
  title = 'Total de Vendas';

  iconeAjuste: String = '/src/app/Icones/settings-1.png';

  data1: any[];
  config1: ColChartConfig;
  elementId1: String;

  data2: any[];
  config2: ColChartConfig;
  elementId2: String;

  ngOnInit(): void {

    // Colchart1 Data & Config
    this.data1 = [['Month', 'Vendas por Mês'],
    ['Fev',     11],
    ['Mar',      2],
    ['Abr',  2],
    ['Maio', 2],
    ['jun',    7]];
    this.config1 = new ColChartConfig('', 0.1);
    this.elementId1 = 'myColChart1';
  }

}
