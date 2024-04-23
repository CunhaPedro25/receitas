import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Restaurant} from "../../models/restaurant.model";
import {RestaurantService} from "../../services/restaurant.service";
import {LanguageService} from "../../services/languages.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  restaurantIndex: number = 0;
  restaurant!: Restaurant;
  currentLanguage: string = "";

  constructor(private route: ActivatedRoute, protected languageService: LanguageService, private restaurantService: RestaurantService) { }

  async ngOnInit() {
    this.currentLanguage = this.languageService.currentLanguage;
    this.route.params.subscribe(async params => {
      this.restaurantIndex = +params['id'];            // get url param ID
      this.restaurant = await this.restaurantService.getRestaurantById(this.restaurantIndex);  // Get recipe by that id (could be all in one line)
    });
  }
}
