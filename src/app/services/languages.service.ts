import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: string = 'en'; // Default language
  private translations: any = {}; // Object to store translations

  constructor() {
    this.loadTranslations();
  }

  // Load translations for the current language
  loadTranslations(): void {
    axios.get(`assets/i18n/${this.currentLanguage}.json`)
      .then(response => {
        this.translations = response.data;
      })
      .catch(error => {
        console.error(`Failed to load translations for ${this.currentLanguage}:`, error);
      });
  }

  // Switch to a different language
  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.loadTranslations();
  }

  // Translate a key to the current language
  translate(key: string): string {
    const keys = key.split('.');
    let translation = this.translations;

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return key;
      }
    }
    return translation;
  }
}
