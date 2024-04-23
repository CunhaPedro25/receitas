import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  // Using axios, do a request to the json file path and return that information
  async fetchData(filePath: string): Promise<any> {
    return await axios.get<any>(`${filePath}`).then(innerResponse => innerResponse.data)
  }
}
