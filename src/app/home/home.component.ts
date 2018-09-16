import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  iconeLogin: String = '/src/app/Icones/imgConta.png';
  iconeLogo: String = '/src/app/Icones/logo.png';
  iconeHome: String = '/src/app/Icones/house.png';
  iconeConta: String = '/src/app/Icones/avatar.png';
  iconeAjuste: String = '/src/app/Icones/settings-1.png';
  iconeConfig: String = '/src/app/Icones/settings.png';
  iconeVisual: String = '/src/app/Icones/monitor.png';
  iconeChat1: String = '/src/app/Icones/chat-1.png';
  iconeSair: String = '/src/app/Icones/cancel.png';

  constructor() { }

  ngOnInit() {
  }

}
