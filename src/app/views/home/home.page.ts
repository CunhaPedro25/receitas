import {Component, OnInit} from '@angular/core';
import { LanguageService } from '../../services/languages.service';
import { RecipeService } from '../../services/recipes.service';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  recipes: Recipe[] = [];
  currentLanguage: string = "";

  constructor(protected languageService: LanguageService, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage;
    this.recipeService.getAllRecipes().then(recipes => this.recipes = recipes)
  }
}
