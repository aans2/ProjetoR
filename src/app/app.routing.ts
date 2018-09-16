import { FixoComponent } from './fixo/fixo.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

// import { NgModule } from '@angular/core';


const APP_ROUTES: Routes = [
  { path: 'visual', component: FixoComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
