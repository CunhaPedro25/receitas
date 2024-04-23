import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {About} from "../models/about.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private dataService: DataService) { }

  async getAboutInformation(){
    try {
      return await this.dataService.fetchData('assets/data/about.json') as About;
    } catch (error) {
      console.error('Error fetching about information:', error);
      throw error;
    }
  }
}
