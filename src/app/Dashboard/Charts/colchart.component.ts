import { Component, Input, OnInit } from '@angular/core';

import { GoogleColChartService } from './../../Services/google-col-chart.service';
import { ColChartConfig } from './../../Models/ColChartConfig';

declare var google: any;

@Component({
  selector: 'col-chart',
  templateUrl: './colchart.component.html'
})
export class ColChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: ColChartConfig;
    @Input() elementId: String;

    constructor(private _colChartService: GoogleColChartService) {}

    ngOnInit(): void {
        this._colChartService.BuildColChart(this.elementId, this.data, this.config);
    }
}
