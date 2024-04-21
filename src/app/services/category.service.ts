import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Category } from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private dataService: DataService) {}

  async getAllCategories(): Promise<Category[]> {
    try {
      const data = await this.dataService.fetchData('assets/data/categories.json');
      return data as Category[];
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  async getCategoryByName(name: string): Promise<Category> {
    return await this.getAllCategories().then((categories: Category[]) => {
      return <Category>categories.find(category => category.id === name);
    })
  }
}
