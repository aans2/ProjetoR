import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabProdComponent } from './tab-prod/tab-prod.component';
import { VisualComponent } from './visual/visual.component';
import { MapaComponent } from './mapa/mapa.component';
import { routing } from './app.routing';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { Dashboard2Component } from './Dashboard/dashboard2.component';
import { GooglePieChartService } from './Services/google-pie-chart.service';
import { PieChartComponent } from './Dashboard/Charts/piechart.component';
import { GoogleColChartService } from './Services/google-col-chart.service';
import { ColChartComponent } from './Dashboard/Charts/colchart.component';
import { FixoComponent } from './fixo/fixo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabProdComponent,
    VisualComponent,
    MapaComponent,
    DashboardComponent,
    Dashboard2Component,
    PieChartComponent,
    ColChartComponent,
    FixoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [GooglePieChartService, GoogleColChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
