import {Component, OnInit, ViewChild} from '@angular/core';
import { MainSearchComponent } from "../main-search/main-search.component";

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss']
})
export class MainMapComponent implements OnInit {
  @ViewChild(MainSearchComponent) searchComponent: MainSearchComponent;

  loadMap: boolean = false;
  mapsUrl: string;

  constructor() {
  }

  public setMapPosition(latitude: string, longitude: string) {
    if (!this.loadMap) { this.loadMap = true; }
    this.mapsUrl = "https://www.google.com/maps/embed/v1/view?key=AIzaSyDrn3f6itR7-noog48KtLYcKC4rOBlHT90&zoom=10&center=" + latitude + "," + longitude;
  }

  ngOnInit() {
    this.searchComponent.embedded = true;
  }

}
