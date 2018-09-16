import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { ColChartConfig } from './../Models/ColChartConfig';

declare var google: any;

@Injectable()
export class GoogleColChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildColChart(elementId: String, data: any[], config: ColChartConfig) : void {
    var chartFunc = () => { return new google.visualization.ColumnChart(document.getElementById(<string>elementId)); };
    var options = {
            title: config.title,
            col: config.col,
      };

    this.buildChart(data, chartFunc, options);
  }
}
