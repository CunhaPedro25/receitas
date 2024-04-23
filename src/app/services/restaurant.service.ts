import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Restaurant } from "../models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private dataService: DataService) {}

  async getAllRestaurants(): Promise<Restaurant[]> {
    try {
      const data = await this.dataService.fetchData('assets/data/restaurants.json');
      return data as Restaurant[];
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      throw error;
    }
  }

  async getRestaurantById(id: number): Promise<Restaurant> {
    return await this.getAllRestaurants().then((restaurants: Restaurant[]) => {
      return <Restaurant>restaurants[id]
    })
  }
}
