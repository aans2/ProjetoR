import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-prod',
  templateUrl: './tab-prod.component.html',
  styleUrls: ['./tab-prod.component.css']
})
export class TabProdComponent implements OnInit {

  iconeStar: String = '/src/app/Icones/star.png';
  iconeCopy: String = '/src/app/Icones/copy.png';
  iconeLix: String = '/src/app/Icones/garbage.png';
  iconeConfig: String = '/src/app/Icones/settings.png';
  iconeAjuste: String = '/src/app/Icones/settings-1.png';

  constructor() { }

  ngOnInit() {
  }

}
