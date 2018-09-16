import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {

  iconeAdd: String = '/src/app/Icones/iconAdicionar.png';
  iconeCam: String = '/src/app/Icones/photo-camera.png';
  iconeEnv: String = '/src/app/Icones/envelope.png';
  iconePizza: String = '/src/app/Icones/pie-chart.png';
  iconeLupa: String = '/src/app/Icones/magnifying-glass.png';
  iconeChat2: String = '/src/app/Icones/chat-2.png';
  iconeStar: String = '/src/app/Icones/star.png';
  iconeCopy: String = '/src/app/Icones/copy.png';
  iconeLix: String = '/src/app/Icones/garbage.png';

  constructor() { }

  ngOnInit() {
  }

}
