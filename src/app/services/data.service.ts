import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  async fetchData(filePath: string): Promise<any[]> {
    return axios.get<any>(`${filePath}`).then(innerResponse => innerResponse.data)
  }
}
