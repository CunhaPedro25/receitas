import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true
})
export class MapComponent implements AfterViewInit {
  constructor() { }

  private map: Leaflet.Map | undefined;
  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [ 41.693859, -8.8494839 ],
      zoom: 17
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void { this.initMap(); }
}
