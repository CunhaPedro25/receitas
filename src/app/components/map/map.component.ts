import {Component, OnInit, Input} from '@angular/core';
import * as Leaflet from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true
})
export class MapComponent implements OnInit {
  @Input() latitude!: number;
  @Input() longitude!: number;

  constructor() { }

  private map: Leaflet.Map | undefined;
  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [ this.latitude, this.longitude ],
      zoom: 17
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = Leaflet.marker([this.latitude, this.longitude], {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/red-marker.svg',
      }),
      title: 'Riva'
    }).addTo(this.map);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.initMap();
  }
}
