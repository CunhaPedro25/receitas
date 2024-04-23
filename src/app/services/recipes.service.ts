import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {Recipe} from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private dataService: DataService) {}

  async getAllRecipes(): Promise<Recipe[]> {
    try {
      const data = await this.dataService.fetchData('assets/data/recipes.json');
      return data as Recipe[];
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }

  async getRecipeById(id: number): Promise<Recipe> {
    return await this.getAllRecipes().then((recipes: Recipe[]) => {
      console.log(<Recipe>recipes[id]);
      return <Recipe>recipes[id];
    })
  }
}
