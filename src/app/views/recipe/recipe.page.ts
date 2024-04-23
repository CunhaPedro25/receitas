import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipes.service';
import { LanguageService } from '../../services/languages.service';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  recipeIndex: number = 0;
  recipe!: Recipe;
  currentLanguage: string = "";

  constructor(private route: ActivatedRoute, protected languageService: LanguageService, private recipeService: RecipeService) { }

  async ngOnInit() {
    this.currentLanguage = this.languageService.currentLanguage;
    this.route.params.subscribe(async params => {
      this.recipeIndex = +params['id'];         // get url param ID
      this.recipe = await this.recipeService.getRecipeById(this.recipeIndex); // Get recipe by that id (could be all in one line)
    });
  }
}
