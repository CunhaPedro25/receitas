import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: string = 'pt'; // Default language
  private translations: any = {}; // Object to store translations

  constructor() {
    this.loadTranslations().then(() => {
      console.log('Translations loaded successfully.');
    }).catch(error => {
      console.error(`Failed to load translations for ${this.currentLanguage}:`, error);
    });
  }

  // Load translations for the current language
  async loadTranslations(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      axios.get(`assets/i18n/${this.currentLanguage}.json`)
        .then(response => {
          this.translations = response.data;
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // Switch to a different language
  async switchLanguage(language: string): Promise<void> {
    this.currentLanguage = language;
    await this.loadTranslations().then().catch(error => {
      console.error(`Failed to switch translations to ${language}:`, error);
    });
  }

  // Translate a key to the current language, this also checks if the key is from an array like "tabs.home"
  // where translation is located inside tabs array
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
