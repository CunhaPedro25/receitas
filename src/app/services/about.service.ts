import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {About} from "../models/about.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private dataService: DataService) { }

  // Fetch information about creator (me :3)
  async getAboutInformation(){
    try {
      // Await for information that the  data service will return and send it back using the About model
      return await this.dataService.fetchData('assets/data/about.json') as About;
    } catch (error) {
      console.error('Error fetching about information:', error);
      throw error;
    }
  }
}
