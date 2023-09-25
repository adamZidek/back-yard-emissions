import { Component, OnInit } from '@angular/core';

import { Map, map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'back-yard-emissions';

  public map!: Map;

  constructor() {
    
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.map = map('map');
    this.map.setView([51.505, -0.09], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }
}


