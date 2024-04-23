import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/languages.service';
import { RecipeService } from '../../services/recipes.service';
import { RestaurantService } from "../../services/restaurant.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  selectedOption: string | undefined = undefined;
  data: any[] | undefined;
  filteredData: any[] | undefined;
  currentLanguage: string = "";
  searchTerm: string = "";

  constructor(private router: Router, protected languageService: LanguageService, private recipeService: RecipeService, private restaurantService: RestaurantService) {}

  async ngOnInit(): Promise<void> {
    this.currentLanguage = this.languageService.currentLanguage;
    await this.languageService.switchLanguage(this.currentLanguage)
    this.selectedOption = "recipe";
    this.onChange();
  }

  filterData(): void {
    if (this.data && this.searchTerm.trim() !== "") {
      this.filteredData = this.data.filter(item => {
        return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.filteredData = this.data; // If search term is empty, display all data
    }
  }

  // Used to switch between subpages, more subpages can be added easily
  onChange(): void {
    switch(this.selectedOption) {
      case "recipe":
        this.recipeService.getAllRecipes().then(recipes => {
          this.data = recipes;
          this.filteredData = recipes;
        });
        break;
      case "restaurant":
        this.restaurantService.getAllRestaurants().then(restaurants => {
          this.data = restaurants;
          this.filteredData = restaurants;
        });
        break;
    }
  }

  switchLanguage(): void {
    this.languageService.switchLanguage(this.currentLanguage);
    this.onChange();
  }

  //Generic open page method that works for any card located in home page,
  // if the card calls this function of course
  async openPage(index: number): Promise<void> {
    await this.router.navigate([`/${this.selectedOption}`, index]);
  }
}
