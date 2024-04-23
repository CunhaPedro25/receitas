import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {History} from "../models/history.model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private dataService: DataService) { }

  async getHistoryInformation(){
    try {
      return await this.dataService.fetchData('assets/data/history.json') as History;
    } catch (error) {
      console.error('Error fetching history:', error);
      throw error;
    }
  }
}
